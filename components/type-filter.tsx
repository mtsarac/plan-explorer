"use client";
import type { Item } from "@/lib/data/data";
import { Button } from "./ui/button";

type TypeFilterProps = {
  rawData: Item[];
  onFilter: (filteredData: Item[]) => void;
  currentFilter: string;
  onFilterChange: (filter: string) => void;
};

export default function TypeFilter({
  rawData,
  onFilter,
  currentFilter,
  onFilterChange,
}: TypeFilterProps) {
  function handleFilterChange(filterType: string) {
    onFilterChange(filterType);

    if (filterType === "all") {
      onFilter(rawData);
    } else {
      const filteredData = rawData.filter((item) => item.type === filterType);
      onFilter(filteredData);
    }
  }

  return (
    <div className="flex gap-2 mb-4">
      <Button
        variant={currentFilter === "all" ? "default" : "outline"}
        size="sm"
        onClick={() => handleFilterChange("all")}
      >
        All ({rawData.length})
      </Button>
      <Button
        variant={currentFilter === "meal" ? "default" : "outline"}
        size="sm"
        onClick={() => handleFilterChange("meal")}
      >
        Meals ({rawData.filter((item) => item.type === "meal").length})
      </Button>
      <Button
        variant={currentFilter === "training" ? "default" : "outline"}
        size="sm"
        onClick={() => handleFilterChange("training")}
      >
        Training ({rawData.filter((item) => item.type === "training").length})
      </Button>
    </div>
  );
}
