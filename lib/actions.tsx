import { type Item, items } from "./data/data";

export async function fetchData(): Promise<Item[]> {
  let data: Item[] = [];
  data = items;
  return data;
}
export function sortData() {}
export function filterData() {}
