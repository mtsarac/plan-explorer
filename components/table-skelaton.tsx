import React from "react";
import { Skeleton } from "./ui/skeleton";
import { TableCell, TableRow } from "./ui/table";

export default function TableSkelaton() {
  return (
    <>
      <TableRow>
        <TableCell colSpan={5}>
          <Skeleton className="h-4 w-64"></Skeleton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={5}>
          <Skeleton className="h-4 w-64"></Skeleton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={5}>
          <Skeleton className="h-4 w-64"></Skeleton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={5}>
          <Skeleton className="h-4 w-64"></Skeleton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={5}>
          <Skeleton className="h-4 w-64"></Skeleton>
        </TableCell>
      </TableRow>
    </>
  );
}
