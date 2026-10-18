import { expect, test } from "vitest";
import { total } from "./cart";

test("sums items", () => {
  expect(total([{ price: 10, qty: 2 }, { price: 5, qty: 1 }])).toBe(25);
});
