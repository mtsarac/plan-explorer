"use client";
import { useState } from "react";
import { filterData } from "@/lib/actions";
import type { Item } from "@/lib/data/data";
import { Input } from "./ui/input";

type SearchInputProps = {
  rawData: Item[];
  currentTypeFilter: string;
  onFilter: (filteredData: Item[]) => void;
};

export default function SearchInput({
  rawData,
  currentTypeFilter,
  onFilter,
}: SearchInputProps) {
  const [searchTerm, setSearchTerm] = useState("");

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setSearchTerm(value);

    // First apply type filter, then text search
    let filteredData = rawData;
    if (currentTypeFilter !== "all") {
      filteredData = rawData.filter((item) => item.type === currentTypeFilter);
    }

    // Then apply text search on the type-filtered data
    filteredData = filterData(value, filteredData);
    onFilter(filteredData);
  }

  return (
    <Input
      className="mb-4"
      value={searchTerm}
      onChange={onChange}
      placeholder="Search by title, tags, or kcal..."
    />
  );
}
