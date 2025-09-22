"use client";
import { useEffect, useState } from "react";
import TableSkelaton from "@/components/table-skelaton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchData } from "@/lib/actions";
import type { Item } from "../lib/data/data";

export default function Home() {
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
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-fit h-fit p-8 border-2 border-line border-gray-300">
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
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.type}</TableCell>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.kcal}</TableCell>
                  <TableCell className=" capitalize">
                    {item.tags.join(", ")}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
