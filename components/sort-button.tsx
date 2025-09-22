import type { PropsWithChildren } from "react";
import { Button } from "./ui/button";

type SortButtonProps = PropsWithChildren & {
  onClick?: () => void;
};

export default function SortButton({ children, onClick }: SortButtonProps) {
  return (
    <Button variant={"link"} onClick={onClick}>
      {children}
    </Button>
  );
}
