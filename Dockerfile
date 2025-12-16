FROM oven/bun:1 AS base
WORKDIR /usr/src/app

# Install dependencies only when needed
FROM base AS deps
COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile --production

# Rebuild the source code only when needed
FROM base AS builder
COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile

COPY . .

# Build Next.js application
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
RUN bun run build

# Create public directory if it doesn't exist
RUN mkdir -p /usr/src/app/public

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /usr/src/app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create a non-root user to run the application
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy the public folder (now guaranteed to exist)
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Start the Next.js application
CMD ["bun", "run", "server.js"]
