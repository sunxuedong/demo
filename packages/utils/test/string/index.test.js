import { getString, splitString } from "@/string";

describe("testing getString function", () => {
  test("should return the input string if it's a valid string", () => {
    expect(getString("hello")).toBe("hello");
  });

  test("should return the default value if input is not a string", () => {
    expect(getString(123)).toBe("");
    expect(getString(null)).toBe("");
    expect(getString(undefined)).toBe("");
    expect(getString({})).toBe("");
    expect(getString([])).toBe("");
    expect(getString(true)).toBe("");
  });

  test("should return the provided default value if input is not a string", () => {
    expect(getString(123, "default")).toBe("default");
    expect(getString(null, "default")).toBe("default");
    expect(getString(undefined, "default")).toBe("default");
    expect(getString({}, "default")).toBe("default");
    expect(getString([], "default")).toBe("default");
    expect(getString(true, "default")).toBe("default");
  });

  test("should return an empty string if input is an empty string", () => {
    expect(getString("")).toBe("");
  });
});

describe("testing splitString function", () => {
  test("should split a string by the default comma", () => {
    expect(splitString({ data: "a,b,c" })).toEqual(["a", "b", "c"]);
  });

  test("should split a string by a custom symbol", () => {
    expect(splitString({ data: "a|b|c", symbol: "|" })).toEqual([
      "a",
      "b",
      "c",
    ]);
  });

  test("should return the default value if the input string is empty", () => {
    expect(splitString({ data: "", defaultValue: ["default"] })).toEqual([
      "default",
    ]);
  });

  test("should return the default value if the input is not a string", () => {
    expect(splitString({ data: 123, defaultValue: ["default"] })).toEqual([
      "default",
    ]);
    expect(splitString({ data: null, defaultValue: ["default"] })).toEqual([
      "default",
    ]);
    expect(splitString({ data: undefined, defaultValue: ["default"] })).toEqual(
      ["default"]
    );
    expect(splitString({ data: {}, defaultValue: ["default"] })).toEqual([
      "default",
    ]);
    expect(splitString({ data: [], defaultValue: ["default"] })).toEqual([
      "default",
    ]);
    expect(splitString({ data: true, defaultValue: ["default"] })).toEqual([
      "default",
    ]);
  });

  test("should return an empty array if the input is empty and no default value is provided", () => {
    expect(splitString({ data: "" })).toEqual([]);
  });

  test("should handle strings without the split symbol", () => {
    expect(splitString({ data: "abc" })).toEqual(["abc"]);
  });

  test("should handle strings with multiple custom symbols", () => {
    expect(splitString({ data: "a|b,c", symbol: "|" })).toEqual(["a", "b,c"]);
    expect(splitString({ data: "a|b|c", symbol: "|" })).toEqual([
      "a",
      "b",
      "c",
    ]);
  });

  test("should handle input with no arguments", () => {
    expect(splitString()).toEqual([]);
  });

  test("should handle input with only defaultValue", () => {
    expect(splitString({ defaultValue: ["a", "b", "c"] })).toEqual([
      "a",
      "b",
      "c",
    ]);
  });

  test("should handle input with only symbol", () => {
    expect(splitString({ data: "a;b;c", symbol: ";" })).toEqual([
      "a",
      "b",
      "c",
    ]);
  });

  test("should handle input with both symbol and defaultValue", () => {
    expect(
      splitString({ data: "", symbol: ";", defaultValue: ["x", "y", "z"] })
    ).toEqual(["x", "y", "z"]);
    expect(
      splitString({ data: "a;b;c", symbol: ";", defaultValue: ["x", "y", "z"] })
    ).toEqual(["a", "b", "c"]);
  });
});
