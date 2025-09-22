import assert from "node:assert";
import test, { describe } from "node:test";
import { filterData, sortData } from "@/lib/actions";
import type { Item } from "@/lib/data/data";

const mockData: Item[] = [
  { id: 1, type: "meal", title: "Banana", kcal: 100, tags: ["fruit"] },
  { id: 2, type: "training", title: "Running", kcal: 300, tags: ["cardio"] },
  { id: 3, type: "meal", title: "Apple", kcal: 80, tags: ["fruit"] },
];

describe("sortData", () => {
  test("sorts by title ascending", () => {
    const result = sortData("title", mockData, true);
    assert.strictEqual(result[0].title, "Apple");
    assert.strictEqual(result[1].title, "Banana");
    assert.strictEqual(result[2].title, "Running");
  });

  test("sorts by kcal descending", () => {
    const result = sortData("kcal", mockData, false);
    assert.strictEqual(result[0].kcal, 300);
    assert.strictEqual(result[1].kcal, 100);
    assert.strictEqual(result[2].kcal, 80);
  });
});

describe("filterData", () => {
  test("filters by type", () => {
    const result = filterData("meal", mockData);
    assert.strictEqual(result.length, 2);
    assert.ok(result.every((item) => item.type === "meal"));
  });

  test("filters by search term", () => {
    const result = filterData("run", mockData);
    assert.strictEqual(result.length, 1);
    assert.strictEqual(result[0].title, "Running");
  });

  test("filters by search term case insensitive", () => {
    const result = filterData("RUN", mockData);
    assert.strictEqual(result.length, 1);
    assert.strictEqual(result[0].title, "Running");
  });

  test("returns all items when filter is 'all' and no search", () => {
    const result = filterData("", mockData);
    assert.strictEqual(result.length, 3);
  });
});
