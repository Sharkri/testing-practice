export default function capitalize(string) {
  if (typeof string !== "string") throw Error("Bad parameters");
  return string[0].toUpperCase() + string.slice(1);
}
