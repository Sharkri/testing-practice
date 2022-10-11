import capitalize from "../scripts/capitalize";

it("should capitalize first character", () => {
  expect(capitalize("test text text")).toBe("Test text text");
  expect(capitalize("aple")).toBe("Aple");
  expect(capitalize("???")).toBe("???");
});

it("should throw error on bad parameters", () => {
  expect(() => capitalize({})).toThrow("Bad parameters");
  expect(() => capitalize(() => {})).toThrow("Bad parameters");
  expect(() => capitalize(123090192)).toThrow("Bad parameters");
});
