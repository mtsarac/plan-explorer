import { type Item, items } from "./data/data";

export async function fetchData(): Promise<Item[]> {
  let data: Item[] = [];
  data = items;
  return data;
}
enum type {
  asc = "asc",
  dec = "desc",
}
enum col {
  title = "title",
  kcal = "kcal",
}
export async function sortData(
  data: Item[],
  col: col,
  type?: type,
): Promise<Item[]> {
  if (!data) throw new Error("Must send data to sort.");
  if (type === "desc" && !col) return data.reverse();

  return data;
}
export function filterData(query: string, rawData: Item[]) {
  if (!rawData) throw new Error("Must send data to filter.");
  if (!query) return rawData;
  return rawData.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()),
  );
}
