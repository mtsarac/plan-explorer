import type { PropsWithChildren } from "react";
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
        <CardTitle>Plan Explorer</CardTitle>
        <CardDescription>
          This is a simple plan table with sorting and filtering options
        </CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
