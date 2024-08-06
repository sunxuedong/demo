import getObject from "@/object/getObject";

describe("testing getObject method", () => {
  test("getting an object", () => {
    expect(getObject({ name: "Bruce Lee" })).toEqual({ name: "Bruce Lee" });
  });

  test("inputed value is not an object that should return default empty object", () => {
    expect(getObject(123)).toEqual({});
  });
});
