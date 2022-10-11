import caesarCipher from "../scripts/caesarCipher";

test("should work for single character", () => {
  expect(caesarCipher("a")).toBe("b");
});

test("should wrap character from z to a", () => {
  expect(caesarCipher("zzz")).toBe("aaa");
});

test("should keep same case", () => {
  expect(caesarCipher("nxsLCSfx")).toBe("oytMDTgy");
});

test("should work with characters that arent A-Z", () => {
  expect(caesarCipher("ux 0$* 0796*d#.")).toBe("vy 0$* 0796*e#.");
});

test("normal input", () => {
  expect(caesarCipher("The quick brown fox jumps over the lazy dog.")).toBe(
    "Uif rvjdl cspxo gpy kvnqt pwfs uif mbaz eph."
  );
});
