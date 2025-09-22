import type { PropsWithChildren } from "react";
import { ModeToggle } from "./theme-toggle";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function CardTable({ children }: PropsWithChildren) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          Plan Explorer
          <ModeToggle />
        </CardTitle>
        <CardDescription>
          This is a simple plan table with sorting and filtering options
        </CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
