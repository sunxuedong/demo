import { getNumber } from "@/number";

describe("testing getNumber method", () => {
  test("getting a real number like 99", () => {
    expect(getNumber(99)).toBe(99);
  });

  test("getting number 0 by input '99'", () => {
    expect(getNumber("99")).toBe(0);
  });
});
