import getArray from "@/array/getArray";

describe("testing getArray method", () => {
  test("getting a real array", () => {
    expect(getArray([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("getting default empty array by input {}", () => {
    expect(getArray({})).toEqual([]);
  });
});
