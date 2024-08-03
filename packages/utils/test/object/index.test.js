import { isObject, getObject } from "@/object";

describe("testing object", () => {
  describe("testing isObject method", () => {
    test("inputed value is not an object that should return false", () => {
      expect(isObject([1, 2, 3])).toBe(false);
    });

    test("inputed value is an object that should return true", () => {
      expect(isObject({})).toBe(true);
    });
  });

  describe("testing getObject method", () => {
    test("getting an object", () => {
      expect(getObject({ name: "Bruce Lee" })).toEqual({ name: "Bruce Lee" });
    });

    test("inputed value is not an object that should return default empty object", () => {
      expect(getObject(123)).toEqual({});
    });
  });
});
