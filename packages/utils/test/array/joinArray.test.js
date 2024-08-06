import joinArray from "@/array/joinArray";

describe("testing joinArray function", () => {
  test("should join a normal array with default comma", () => {
    expect(joinArray({ data: [1, 2, 3] })).toBe("1,2,3");
  });

  test("should join a normal array with custom symbol", () => {
    expect(joinArray({ data: [1, 2, 3], symbol: "$" })).toBe("1$2$3");
  });

  test("should join an empty array with default comma", () => {
    expect(joinArray({ data: [] })).toBe("");
  });

  test("should join an empty array with custom symbol", () => {
    expect(joinArray({ data: [], symbol: ";" })).toBe("");
  });

  test("should join an array with filterEmpty true", () => {
    expect(
      joinArray({ data: ["a", "", "b", null, "c"], filterEmpty: true })
    ).toBe("a,b,c");
  });

  test("should join an array with filterEmpty false (default)", () => {
    expect(joinArray({ data: ["a", "", "b", null, "c"] })).toBe("a,,b,,c");
  });

  test("should join an array with all elements empty and filterEmpty true", () => {
    expect(joinArray({ data: ["", "", ""], filterEmpty: true })).toBe("");
  });

  test("should join an array with all elements empty and filterEmpty false", () => {
    expect(joinArray({ data: ["", "", ""] })).toBe(",,");
  });

  test("should handle non-array input by using defaultValue", () => {
    expect(joinArray({ data: {}, defaultValue: [1, 2, 3] })).toBe("1,2,3");
    expect(joinArray({ data: 123, defaultValue: [4, 5, 6] })).toBe("4,5,6");
    expect(joinArray({ data: null, defaultValue: [7, 8, 9] })).toBe("7,8,9");
    expect(joinArray({ data: "string", defaultValue: [10, 11, 12] })).toBe(
      "10,11,12"
    );
  });

  test("should use empty array as default value when input is not an array and defaultValue is not provided", () => {
    expect(joinArray({ data: {} })).toBe("");
    expect(joinArray({ data: 123 })).toBe("");
    expect(joinArray({ data: null })).toBe("");
    expect(joinArray({ data: "string" })).toBe("");
  });

  test("should handle default symbol as comma if no symbol is provided", () => {
    expect(joinArray({ data: ["a", "b", "c"] })).toBe("a,b,c");
  });

  test("should handle default symbol as comma if symbol is an empty string", () => {
    expect(joinArray({ data: ["a", "b", "c"], symbol: "" })).toBe("abc");
  });

  test("should handle case where data is undefined", () => {
    expect(joinArray({ data: undefined })).toBe("");
    expect(joinArray({ data: undefined, defaultValue: ["x", "y", "z"] })).toBe(
      "x,y,z"
    );
  });

  test("should handle case where symbol is undefined", () => {
    expect(joinArray({ data: ["a", "b", "c"], symbol: undefined })).toBe(
      "a,b,c"
    );
  });

  test("should handle case where both data and symbol are undefined", () => {
    expect(joinArray({ data: undefined, symbol: undefined })).toBe("");
  });

  test("should handle case where filterEmpty is undefined", () => {
    expect(
      joinArray({ data: ["a", "", "b", null, "c"], filterEmpty: undefined })
    ).toBe("a,,b,,c");
  });

  test("should handle non-array input with filterEmpty and defaultValue", () => {
    expect(
      joinArray({
        data: null,
        defaultValue: ["a", null, "b", "", "c"],
        filterEmpty: true,
      })
    ).toBe("a,b,c");
  });

  test("should handle array with special characters and custom symbol", () => {
    expect(joinArray({ data: ["a", "b", "c"], symbol: "|" })).toBe("a|b|c");
  });

  test("should handle array with numbers and custom symbol", () => {
    expect(joinArray({ data: [1, 2, 3], symbol: "-" })).toBe("1-2-3");
  });

  test("should handle mixed types in array", () => {
    expect(
      joinArray({ data: [1, "b", null, true, undefined], filterEmpty: true })
    ).toBe("1,b,true");
  });

  test("should handle empty input object", () => {
    expect(joinArray({})).toBe("");
  });

  test("should handle input with no arguments", () => {
    expect(joinArray()).toBe("");
  });

  test("should handle input with only defaultValue", () => {
    expect(joinArray({ defaultValue: [1, 2, 3] })).toBe("1,2,3");
  });

  test("should handle input with defaultValue and symbol", () => {
    expect(joinArray({ defaultValue: [1, 2, 3], symbol: "-" })).toBe("1-2-3");
  });

  test("should handle input with defaultValue, symbol, and filterEmpty", () => {
    expect(
      joinArray({
        defaultValue: [1, "", 2, null, 3],
        symbol: "-",
        filterEmpty: true,
      })
    ).toBe("1-2-3");
  });

  test("should handle input with data, defaultValue, symbol, and filterEmpty", () => {
    expect(
      joinArray({
        data: ["a", "", "b"],
        defaultValue: [1, 2, 3],
        symbol: "-",
        filterEmpty: true,
      })
    ).toBe("a-b");
  });
});
