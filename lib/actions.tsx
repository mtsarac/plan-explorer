import type { Item } from "./data/data";

export function filterData(query: string, rawData: Item[]) {
  if (!rawData) throw new Error("Must send data to filter.");
  if (!query.trim()) return rawData;

  const searchTerm = query.toLowerCase();

  const filteredData = [...rawData].filter((item) =>
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
            typeof tag === "string" && tag.toLowerCase().includes(searchTerm)
        );
      }

      return false;
    })
  );

  return filteredData;
}

export function sortData(
  key: keyof Item,
  data: Item[],
  ascending: boolean = true
) {
  if (!data) throw new Error("Must send data to sort.");

  const sortedData = [...data].sort((a, b) => {
    if (a[key] < b[key]) return ascending ? -1 : 1;
    if (a[key] > b[key]) return ascending ? 1 : -1;
    return 0;
  });

  return sortedData;
}
