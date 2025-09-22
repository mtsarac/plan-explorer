export type Item = {
  id: number;
  type: "meal" | "training";
  title: string;
  kcal: number;
  tags: string[];
};

export const items: Item[] = [
  {
    id: 1,
    type: "meal",
    title: "Chicken & Rice",
    kcal: 650,
    tags: ["high-protein", "simple"],
  },
  {
    id: 2,
    type: "training",
    title: "Intervals 6x400m",
    kcal: 450,
    tags: ["running", "track"],
  },
  {
    id: 3,
    type: "meal",
    title: "Oats & Berries",
    kcal: 420,
    tags: ["breakfast", "fiber"],
  },
  {
    id: 4,
    type: "training",
    title: "Tempo 30 min",
    kcal: 500,
    tags: ["running", "tempo"],
  },
];
