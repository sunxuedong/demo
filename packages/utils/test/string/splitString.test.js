import splitString from "@/string/splitString";

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
