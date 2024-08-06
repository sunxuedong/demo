import flatTree from "@/tree/flatTree";

describe("flatTree", () => {
  test("should flatten the tree", () => {
    const tree = [{ value: 1, children: [{ value: 2 }, { value: 3 }] }];
    const result = flatTree({ tree });
    expect(result).toEqual([
      { value: 1, children: [{ value: 2 }, { value: 3 }] },
      { value: 2 },
      { value: 3 },
    ]);
  });

  test("should handle empty tree", () => {
    const result = flatTree({ tree: [] });
    expect(result).toEqual([]);
  });

  test("should handle single node tree", () => {
    const tree = [{ value: 1 }];
    const result = flatTree({ tree });
    expect(result).toEqual([{ value: 1 }]);
  });
});
