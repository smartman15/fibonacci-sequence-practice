import { fibonacci } from "./fibonacci";

test("First fibonacci number returns 1", () => {
  expect(fibonacci(1)).toBe(1);
});

test("Second fibonacci number returns 1", () => {
  expect(fibonacci(2)).toBe(1);
});

test("Third fibonacci number returns 2", () => {
  expect(fibonacci(3)).toBe(2);
});

test("Fourth fibonacci number returns 3", () => {
  expect(fibonacci(4)).toBe(3);
});
