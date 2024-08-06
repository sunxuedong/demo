import markNodeLevel from "@/tree/markNodeLevel";

describe("markNodeLevel", () => {
  test("should mark the level of each node", () => {
    const tree = { value: 1, children: [{ value: 2 }, { value: 3 }] };
    markNodeLevel({ root: tree });
    expect(tree).toEqual({
      value: 1,
      level: 1,
      children: [
        { value: 2, level: 2 },
        { value: 3, level: 2 },
      ],
    });
  });

  test("should handle empty tree", () => {
    const result = markNodeLevel({ root: null });
    expect(result).toBeUndefined();
  });

  test("should handle array root", () => {
    const tree = [{ value: 1, children: [{ value: 2 }, { value: 3 }] }];
    markNodeLevel({ root: tree });
    expect(tree).toEqual([
      {
        value: 1,
        level: 1,
        children: [
          { value: 2, level: 2 },
          { value: 3, level: 2 },
        ],
      },
    ]);
  });

  test("should handle no children", () => {
    const tree = { value: 1 };
    markNodeLevel({ root: tree });
    expect(tree).toEqual({ value: 1, level: 1 });
  });
});
