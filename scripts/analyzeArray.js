export default function analyzeArray(array) {
  if (!Array.isArray(array)) throw Error("Parameter must be an array");
  if (!array.every((num) => typeof num === "number"))
    throw Error("Array must only include numbers");

  const object = {
    average: array.reduce((prev, curr) => curr + prev, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
  return object;
}
