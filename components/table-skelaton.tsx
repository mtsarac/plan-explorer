import { Skeleton } from "./ui/skeleton";
import { TableCell, TableRow } from "./ui/table";

export default function TableSkelaton() {
  const iterate = [1, 2, 3, 4, 5];
  return (
    <>
      {iterate.map((item) => (
        <TableRow key={item}>
          <TableCell colSpan={5}>
            <Skeleton className="h-4 w-64"></Skeleton>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}
