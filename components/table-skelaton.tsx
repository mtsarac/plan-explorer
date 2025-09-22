import { Skeleton } from "./ui/skeleton";
import { TableCell, TableRow } from "./ui/table";

// A simple table skelaton component to show while loading data
// But it is not used currently
// We can use it in ItemTable component when data is being fetched

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
