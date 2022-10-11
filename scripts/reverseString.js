export default function reverseString(string) {
  if (typeof string !== "string") throw Error("bad parameters");
  return string.split("").reverse().join("");
}
