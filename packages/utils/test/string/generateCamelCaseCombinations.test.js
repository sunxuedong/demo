// generateCamelCaseCombinations.test.js
import generateCamelCaseCombinations from "@/string/generateCamelCaseCombinations";

test("should generate all camelCase combinations from the first word", () => {
  expect(generateCamelCaseCombinations(["hello", "world", "guys"])).toEqual([
    "hello",
    "helloWorld",
    "helloWorldGuys",
  ]);
});

test("should handle an array with one word", () => {
  expect(generateCamelCaseCombinations(["hello"])).toEqual(["hello"]);
});

test("should handle an empty array", () => {
  expect(generateCamelCaseCombinations([])).toEqual([]);
});

test("should handle an array with two words", () => {
  expect(generateCamelCaseCombinations(["hello", "world"])).toEqual([
    "hello",
    "helloWorld",
  ]);
});

test("should handle an array with three words of mixed case", () => {
  expect(generateCamelCaseCombinations(["HeLLo", "WoRLD", "GUYS"])).toEqual([
    "hello",
    "helloWorld",
    "helloWorldGuys",
  ]);
});
