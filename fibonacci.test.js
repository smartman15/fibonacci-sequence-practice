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

test("Fifth fibonacci number returns 5", () => {
  expect(fibonacci(5)).toBe(5);
});

test("Sixth fibonacci number returns 8", () => {
  expect(fibonacci(6)).toBe(8);
});

test("Seventh fibonacci number returns 13", () => {
  expect(fibonacci(7)).toBe(13);
});

test("Eighth fibonacci number returns 21", () => {
  expect(fibonacci(8)).toBe(21);
});

test("Ninth fibonacci number returns 34", () => {
  expect(fibonacci(9)).toBe(34);
});

test("Tenth fibonacci number returns 55", () => {
  expect(fibonacci(10)).toBe(55);
});
