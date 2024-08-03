import { getArray, joinArray } from "@/array";

describe("testing getArray method", () => {
  test("getting a real array", () => {
    expect(getArray([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("getting default empty array by input {}", () => {
    expect(getArray({})).toEqual([]);
  });
});

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
    expect(joinArray({ data: {} })).toBe("");
    expect(joinArray({ data: 123 })).toBe("");
    expect(joinArray({ data: null })).toBe("");
    expect(joinArray({ data: "string" })).toBe("");
  });

  test("should handle defaultValue as an empty array when input is not an array", () => {
    expect(joinArray({ data: {}, symbol: "$", filterEmpty: true })).toBe("");
    expect(joinArray({ data: 123, symbol: "$", filterEmpty: true })).toBe("");
    expect(joinArray({ data: null, symbol: "$", filterEmpty: true })).toBe("");
    expect(joinArray({ data: "string", symbol: "$", filterEmpty: true })).toBe(
      ""
    );
  });

  test("should handle default symbol as comma if no symbol is provided", () => {
    expect(joinArray({ data: ["a", "b", "c"] })).toBe("a,b,c");
  });

  test("should handle default symbol as comma if symbol is an empty string", () => {
    expect(joinArray({ data: ["a", "b", "c"], symbol: "" })).toBe("abc");
  });

  test("should handle case where data is undefined", () => {
    expect(joinArray({ data: undefined })).toBe("");
    expect(joinArray({ data: undefined, symbol: "$" })).toBe("");
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
});
