import reverseString from "../scripts/reverseString";

it("should return a string", () => {
  expect(typeof reverseString("beasnklkoiwajd") === "string").toBe(true);
});

it("should reverse the string", () => {
  expect(reverseString("string")).toBe("gnirts");
});

it("should keep the same case", () => {
  expect(reverseString("somE TESt")).toBe("tSET Emos");
});

it("should work with other chars", () => {
  expect(reverseString("Rever$e. asdffg_")).toBe("_gffdsa .e$reveR");
});

it("should handle bad params", () => {
  expect(() => reverseString(function name(params) {})).toThrow(Error);
  expect(() => reverseString([543543543213210, 321042])).toThrow(Error);
});
