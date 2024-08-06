import isObject from "@/object/isObject";

describe("testing isObject method", () => {
  test("inputed value is not an object that should return false", () => {
    expect(isObject([1, 2, 3])).toBe(false);
  });

  test("inputed value is an object that should return true", () => {
    expect(isObject({})).toBe(true);
  });
});
