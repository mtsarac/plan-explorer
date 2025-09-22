"use client";
import React from "react";
import type { Item } from "@/lib/data/data";
import { Input } from "./ui/input";

type SearchInputProps = {
  rawData: Item[];
  onFilter: (filteredData: Item[]) => void;
};

export default function SearchInput({ rawData, onFilter }: SearchInputProps) {
  const [searchTerm, setSearchTerm] = React.useState("");

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setSearchTerm(value);
    const filteredData = filterData(rawData, value);
    onFilter(filteredData);
  }
  function filterData(rawData: Item[], query: string): Item[] {
    if (!rawData) throw new Error("Must send data to filter.");
    if (!query.trim()) return rawData;

    const searchTerm = query.toLowerCase();

    return rawData.filter((item) =>
      Object.values(item).some((value) => {
        if (typeof value === "string") {
          return value.toLowerCase().includes(searchTerm);
        }

        if (typeof value === "number") {
          return value.toString().includes(searchTerm);
        }

        if (Array.isArray(value)) {
          return value.some(
            (tag) =>
              typeof tag === "string" && tag.toLowerCase().includes(searchTerm),
          );
        }
        return false;
      }),
    );
  }

  return (
    <Input
      className="my-4"
      value={searchTerm}
      onChange={onChange}
      placeholder="Search..."
    />
  );
}
