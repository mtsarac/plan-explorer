"use client";
import { ArrowUpDown } from "lucide-react";
import { type PropsWithChildren, useState } from "react";
import { sortData } from "@/lib/actions";
import type { Item } from "@/lib/data/data";
import ReusableHover from "./reusable-hover-card";
import SearchInput from "./search-input";
import SortButton from "./sort-button";
import TypeFilter from "./type-filter";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "./ui/table";

type ItemTableProps = PropsWithChildren & {
  rawData: Item[];
};
export default function ItemTable({ rawData }: ItemTableProps) {
  const [sortedData, setSortedData] = useState<Item[]>(rawData);
  const [currentTypeFilter, setCurrentTypeFilter] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<{ [key: string]: boolean }>({
    id: true, // true = asc, false = desc
    title: true,
    kcal: true,
  });

  function handleOnClick(column: keyof Item) {
    const newSortedData = sortData(column, sortedData, sortOrder[column]);
    setSortedData(newSortedData);
    setSortOrder((prev) => ({
      ...prev,
      [column]: !prev[column],
    }));
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-2 sm:p-4">
      <TypeFilter
        rawData={rawData}
        onFilter={setSortedData}
        currentFilter={currentTypeFilter}
        onFilterChange={setCurrentTypeFilter}
      />
      <SearchInput
        rawData={rawData}
        currentTypeFilter={currentTypeFilter}
        onFilter={setSortedData}
      />

      <div className="overflow-x-auto rounded-lg border">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="w-12 sm:w-16 text-xs sm:text-sm p-1 sm:p-4">
                <div className="flex flex-row items-center justify-center">
                  Id
                  <SortButton onClick={() => handleOnClick("id")}>
                    <ArrowUpDown className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                  </SortButton>
                </div>
              </TableHead>
              <TableHead className="w-16 sm:w-20 text-xs sm:text-sm p-1 sm:p-4">
                Type
                <SortButton onClick={() => handleOnClick("type")}>
                  <ArrowUpDown className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                </SortButton>
              </TableHead>
              <TableHead className="min-w-24 sm:min-w-48 text-xs sm:text-sm p-1 sm:p-4">
                <div className="flex flex-row items-center">
                  Title
                  <SortButton
                    onClick={() => {
                      handleOnClick("title");
                    }}
                  >
                    <ArrowUpDown className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                  </SortButton>
                </div>
              </TableHead>
              <TableHead className="w-14 sm:w-20 text-xs sm:text-sm p-1 sm:p-4">
                <div className="flex flex-row items-center justify-center">
                  Kcal
                  <SortButton
                    onClick={() => {
                      handleOnClick("kcal");
                    }}
                  >
                    <ArrowUpDown className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                  </SortButton>
                </div>
              </TableHead>
              <TableHead className="min-w-32 text-xs sm:text-sm p-1 sm:p-4">
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
