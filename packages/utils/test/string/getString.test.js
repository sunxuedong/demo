import getString from "@/string/getString";

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
