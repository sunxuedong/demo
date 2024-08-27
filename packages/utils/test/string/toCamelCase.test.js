// toCamelCase.test.js
const toCamelCase = require("@/string/toCamelCase");

test("should convert an array of strings to camel case", () => {
  expect(toCamelCase({ data: ["hello", "world", "from", "openai"] })).toBe(
    "helloWorldFromOpenai"
  );
});

test("should handle an empty array", () => {
  expect(toCamelCase({ data: [] })).toBe("");
});

test("should handle a single word", () => {
  expect(toCamelCase({ data: ["hello"] })).toBe("hello");
});

test("should handle mixed case input", () => {
  expect(toCamelCase({ data: ["Hello", "WORLD", "FrOm", "oPeNaI"] })).toBe(
    "helloWorldFromOpenai"
  );
});

test("should handle array with one empty string", () => {
  expect(toCamelCase({ data: [""] })).toBe("");
});

test("should handle array with multiple empty strings", () => {
  expect(toCamelCase({ data: ["", "", ""] })).toBe("");
});
