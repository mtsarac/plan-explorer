"use client";
import { useEffect, useState } from "react";
import { fetchData } from "@/lib/actions";
import type { Item } from "@/lib/data/data";
import ReusableHover from "./reusable-hover-card";
import TableSkelaton from "./table-skelaton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

export default function ItemTable() {
  const [data, setData] = useState<Item[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const rawData = await fetchData();
      setData(rawData);
      setIsLoading(false);
    };
    fetchItems();
  }, []);
  return (
    <Table className="border-2">
      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Kcal</TableHead>
          <TableHead>Tags</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {isLoading ? (
          <TableSkelaton />
        ) : (
          data.map((item) => (
            <ReusableHover key={item.id} item={item}></ReusableHover>
          ))
        )}
      </TableBody>
    </Table>
  );
}
