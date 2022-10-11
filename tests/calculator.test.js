import calculator from "../scripts/calculator";

test("should add correctly", () => {
  expect(calculator.add(5, 7)).toBe(12);
  expect(calculator.add(69, 420)).toBe(489);
});

test("should subtract correctly", () => {
  expect(calculator.sub(1, 45)).toBe(-44);
  expect(calculator.sub(29, 10)).toBe(19);
});

test("should divide correctly", () => {
  expect(calculator.div(12, 4)).toBe(3);
  expect(calculator.div(49, 7)).toBe(7);
});

test("should multiply correctly", () => {
  expect(calculator.mul(12, 12)).toBe(144);
  expect(calculator.mul(12039, 0)).toBe(0);
});

test("should work for decimals", () => {
  expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
  expect(calculator.div(6.9, 4.2)).toBeCloseTo(1.64);
});
