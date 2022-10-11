import analyzeArray from "../scripts/analyzeArray";

test("should analyze correctly", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });

  expect(analyzeArray([0])).toEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 1,
  });
});

test("should throw error on bad params", () => {
  expect(() => analyzeArray("bad")).toThrow(Error);
  expect(() => analyzeArray(["xd", NaN, 123])).toThrow(Error);
});
