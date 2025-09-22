import itemsData from "./intern-case-2.json";

export type Item = {
  id: number;
  type: "meal" | "training";
  title: string;
  kcal: number;
  tags: string[];
};

export const items: Item[] = itemsData.items as Item[];
