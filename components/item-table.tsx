"use client";
import { ArrowUpDown } from "lucide-react";
import { type PropsWithChildren, useState } from "react";
import type { Item } from "@/lib/data/data";
import ReusableHover from "./reusable-hover-card";
import SearchInput from "./search-input";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "./ui/table";

type ItemTableProps = PropsWithChildren & {
  rawData: Item[];
};
export default function ItemTable({ rawData }: ItemTableProps) {
  const [sortedData, setSortedData] = useState<Item[]>(rawData);
  const [sortOrder, setSortOrder] = useState<{ [key: string]: boolean }>({
    id: true, // true = asc, false = desc
    title: true,
    kcal: true,
  });

  function sortById() {
    const isAsc = sortOrder.id;
    const sorted = [...sortedData].sort((a, b) =>
      isAsc ? a.id - b.id : b.id - a.id,
    );
    setSortedData(sorted);
    setSortOrder({ ...sortOrder, id: !isAsc });
  }

  function sortByTitle() {
    const isAsc = sortOrder.title;
    const sorted = [...sortedData].sort((a, b) =>
      isAsc ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title),
    );
    setSortedData(sorted);
    setSortOrder({ ...sortOrder, title: !isAsc });
  }

  function sortByKcal() {
    const isAsc = sortOrder.kcal;
    const sorted = [...sortedData].sort((a, b) =>
      isAsc ? a.kcal - b.kcal : b.kcal - a.kcal,
    );
    setSortedData(sorted);
    setSortOrder({ ...sortOrder, kcal: !isAsc });
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-2 sm:p-4">
      <SearchInput rawData={rawData} onFilter={setSortedData} />

      <div className="overflow-x-auto rounded-lg border">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead
                className="cursor-pointer w-12 sm:w-16 text-xs sm:text-sm p-1 sm:p-4"
                onClick={sortById}
              >
                <div className="flex flex-row items-center justify-center">
                  <span className="hidden sm:inline">Id</span>
                  <span className="sm:hidden">#</span>
                  <ArrowUpDown className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                </div>
              </TableHead>
              <TableHead className="w-16 sm:w-20 text-xs sm:text-sm p-1 sm:p-4">
                <span className="hidden sm:inline">Type</span>
                <span className="sm:hidden">T</span>
              </TableHead>
              <TableHead
                className="cursor-pointer min-w-24 sm:min-w-48 text-xs sm:text-sm p-1 sm:p-4"
                onClick={sortByTitle}
              >
                <div className="flex flex-row items-center">
                  Title
                  <ArrowUpDown className="ml-1 h-3 w-3 sm:ml-2 sm:h-4 sm:w-4" />
                </div>
              </TableHead>
              <TableHead
                className="cursor-pointer w-14 sm:w-20 text-xs sm:text-sm p-1 sm:p-4"
                onClick={sortByKcal}
              >
                <div className="flex flex-row items-center justify-center">
                  <span className="hidden sm:inline">Kcal</span>
                  <span className="sm:hidden">Cal</span>
                  <ArrowUpDown className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                </div>
              </TableHead>
              <TableHead className="hidden sm:table-cell min-w-32 text-xs sm:text-sm p-1 sm:p-4">
                Tags
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedData.map((item) => (
              <ReusableHover key={item.id} item={item}></ReusableHover>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
