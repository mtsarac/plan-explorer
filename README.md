# Plan Explorer

A filterable, sortable table application built with Next.js, TypeScript, and Tailwind CSS for exploring meal and training plans.

## 🚀 Features

- **Data Display**: Interactive table showing items with ID, type, title, calories, and tags
- **Search**: Real-time text search across title, tags, and calories
- **Type Filter**: Filter by item type (All, Meals, Training)
- **Sorting**: Click column headers to sort ascending/descending
- **Detail View**: Hover cards showing detailed item information
- **Responsive**: Mobile-friendly design with adaptive layouts
- **Accessibility**: Keyboard navigation and screen reader support

## 🏗️ Architecture

### Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page component
├── components/            # React components
│   ├── ui/               # Reusable UI primitives (shadcn/ui)
│   ├── card-table.tsx    # Main container component
│   ├── item-table.tsx    # Core table with state management
│   ├── search-input.tsx  # Search functionality
│   ├── type-filter.tsx   # Type filtering buttons
│   ├── sort-button.tsx   # Sortable column headers
│   └── reusable-hover-card.tsx # Item detail display
├── lib/
│   ├── actions.tsx       # Pure utility functions
│   └── data/
│       ├── data.ts       # Data loading and types
│       └── intern-case-2.json # Source data
└── tests/
    └── tests.ts          # Unit tests for utilities
```

### Design Decisions

#### **Component Architecture**

- **Separation of Concerns**: Pure functions in `lib/actions.tsx` separate business logic from UI
- **Single Responsibility**: Each component has one clear purpose
- **Composition over Inheritance**: Small, reusable components that compose together
- **Props Interface**: Clear TypeScript interfaces for all component props

#### **State Management**

- **Local State**: Using React useState for table state (sorting, filtering)
- **Prop Drilling**: Simple prop passing for this scale (alternative: Context API for larger apps)
- **Immutable Updates**: All state updates create new arrays/objects

#### **Data Flow**

```
JSON Data → data.ts → ItemTable → [SearchInput, TypeFilter] → Pure Functions → Updated State
```

### Technology Choices

#### **Next.js 15**

- ✅ **App Router**: Modern file-based routing
- ✅ **Server Components**: Better performance for static content
- ✅ **TypeScript**: Full type safety

#### **Styling: Tailwind CSS + shadcn/ui**

- ✅ **Utility-first**: Rapid development and consistent design
- ✅ **Component Library**: Pre-built, accessible components
- ✅ **Responsive**: Mobile-first design approach

#### **State: React Built-ins**

- ✅ **Simple**: No external state management needed
- ✅ **Performance**: Local state prevents unnecessary re-renders
- ❌ **Scale Limitation**: Would need Context/Redux for complex apps

## ⚖️ Trade-offs Made

### 1. **Client-Side vs Server-Side Filtering**

- **Choice**: Client-side filtering and sorting
- **Pro**: Instant feedback, no network requests
- **Con**: Limited to small datasets (current: 4 items)
- **Alternative**: Server-side with pagination for large datasets

### 2. **Component Granularity**

- **Choice**: Highly granular components (SearchInput, TypeFilter, SortButton)
- **Pro**: Reusable, testable, maintainable
- **Con**: More files and prop drilling
- **Alternative**: Monolithic components (faster initial development)

### 3. **Responsive Strategy**

- **Choice**: Single responsive table (scale-based)
- **Pro**: Consistent experience across devices
- **Con**: May be cramped on very small screens
- **Alternative**: Card layout on mobile (implemented as hover cards)

### 4. **Testing Strategy**

- **Choice**: Unit tests for pure functions only
- **Pro**: Tests critical business logic
- **Con**: No integration/E2E tests
- **Alternative**: Full testing pyramid with React Testing Library

## 🤖 AI Assistance Used

This project was developed with assistance from **GitHub Copilot** for:

- Generating tests for utility functions
- Fixing minor bugs and typos
- Style suggestions and code snippets
- Writing readme sections

## 🚀 How to Extend

### 1. **Scale for Production**

#### **Backend Integration**

#### **Database Schema**

### 2. **Enhanced UX**

#### **Loading States**

```typescript
const [isLoading, setIsLoading] = useState(false);
// Use TableSkeleton component during loading
```

#### **Keyboard Shortcuts**

```typescript
useHotkeys("ctrl+f", () => searchInputRef.current?.focus());
useHotkeys("escape", () => clearFilters());
```

### 5. **Testing Strategy**

#### **Unit Tests**

```typescript
// Already implemented for pure functions
// Extend to: validation, edge cases, error handling
```

## 🛠️ Development

### Getting Started

```bash
# Install dependencies
bun install

# Run development server
bun run dev

# Run tests
bun run test

# Build for production
bun run build
```

### Scripts

- `dev`: Start development server
- `build`: Build for production
- `start`: Start production server
- `lint`: Run ESLint
- `format`: Format code with Prettier
- `test`: Run unit tests

### Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Runtime**: Bun
- **Testing**: Node.js built-in test runner
