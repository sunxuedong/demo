import tryParse from "@/parse/tryParse";

describe("testing parse", () => {
  describe("testing tryParse method", () => {
    test("testing try parse successfully", () => {
      expect(tryParse('{"a":1,"b":2}')).toEqual({ a: 1, b: 2 });
    });

    test("testing try parse unsuccessfully", () => {
      expect(tryParse("{a: 1, b: 2}", {})).toEqual({});
    });
  });
});
