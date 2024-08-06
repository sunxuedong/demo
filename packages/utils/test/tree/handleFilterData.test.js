import handleFilterData from "@/tree/handleFilterData";

describe("handleFilterData", () => {
  test("should filter the tree based on callback", () => {
    const tree = { value: 1, children: [{ value: 2 }, { value: 3 }] };
    const result = handleFilterData({
      root: tree,
      cb: ({ node }) => node.value !== 2,
    });
    expect(result).toEqual([
      { value: 1, children: [{ value: 3, children: [] }] },
    ]);
  });

  test("should handle empty tree", () => {
    const result = handleFilterData({ root: null });
    expect(result).toBeUndefined();
  });

  test("should handle array root", () => {
    const tree = [{ value: 1, children: [{ value: 2 }, { value: 3 }] }];
    const result = handleFilterData({
      root: tree,
      cb: ({ node }) => node.value !== 2,
    });
    expect(result).toEqual([
      { value: 1, children: [{ value: 3, children: [] }] },
    ]);
  });

  test("should handle no children", () => {
    const tree = { value: 1 };
    const result = handleFilterData({ root: tree });
    expect(result).toEqual([{ value: 1, children: [] }]);
  });

  test("should handle condition that returns false", () => {
    const tree = { value: 1, children: [{ value: 2 }, { value: 3 }] };
    const result = handleFilterData({
      root: tree,
      cb: ({ node }) => false,
    });
    expect(result).toEqual([]);
  });

  test("should handle condition that returns true", () => {
    const tree = { value: 1, children: [{ value: 2 }, { value: 3 }] };
    const result = handleFilterData({
      root: tree,
      cb: ({ node }) => true,
    });
    expect(result).toEqual([
      {
        value: 1,
        children: [
          { value: 2, children: [] },
          { value: 3, children: [] },
        ],
      },
    ]);
  });

  test("should handle deeply nested structure", () => {
    const tree = {
      value: 1,
      children: [
        { value: 2, children: [{ value: 4 }, { value: 5 }] },
        { value: 3, children: [{ value: 6 }, { value: 7 }] },
      ],
    };
    const result = handleFilterData({
      root: tree,
      cb: ({ node }) => node.value !== 4,
    });
    expect(result).toEqual([
      {
        value: 1,
        children: [
          { value: 2, children: [{ value: 5, children: [] }] },
          {
            value: 3,
            children: [
              { value: 6, children: [] },
              { value: 7, children: [] },
            ],
          },
        ],
      },
    ]);
  });

  test("should handle nodes without children", () => {
    const tree = {
      value: 1,
      children: [
        { value: 2, children: [] },
        { value: 3, children: [{ value: 4 }] },
        { value: 5, children: [{ value: 6, children: [] }] },
      ],
    };
    const result = handleFilterData({
      root: tree,
      cb: ({ node }) => node.value !== 6,
    });
    expect(result).toEqual([
      {
        value: 1,
        children: [
          { value: 2, children: [] },
          { value: 3, children: [{ value: 4, children: [] }] },
          { value: 5, children: [] },
        ],
      },
    ]);
  });

  test("should handle condition function using level", () => {
    const tree = {
      value: 1,
      children: [
        { value: 2, children: [{ value: 4 }, { value: 5 }] },
        { value: 3, children: [{ value: 6 }, { value: 7 }] },
      ],
    };
    const result = handleFilterData({
      root: tree,
      cb: ({ node, level }) => level < 2 || node.value !== 6,
    });
    expect(result).toEqual([
      {
        value: 1,
        children: [
          {
            value: 2,
            children: [
              { value: 4, children: [] },
              { value: 5, children: [] },
            ],
          },
          { value: 3, children: [{ value: 7, children: [] }] },
        ],
      },
    ]);
  });

  test("should handle mixed data types", () => {
    const tree = {
      value: "root",
      children: [
        { value: "child1", children: [{ value: "grandchild1" }] },
        { value: "child2", children: [{ value: "grandchild2" }] },
      ],
    };
    const result = handleFilterData({
      root: tree,
      cb: ({ node }) => node.value !== "child1",
    });
    expect(result).toEqual([
      {
        value: "root",
        children: [
          {
            value: "child2",
            children: [{ value: "grandchild2", children: [] }],
          },
        ],
      },
    ]);
  });

  test("should handle empty children array", () => {
    const tree = { value: 1, children: [] };
    const result = handleFilterData({
      root: tree,
      cb: ({ node }) => true,
    });
    expect(result).toEqual([{ value: 1, children: [] }]);
  });

  test("should handle multiple root nodes", () => {
    const tree = [
      { value: 1, children: [{ value: 2 }, { value: 3 }] },
      { value: 4, children: [{ value: 5 }, { value: 6 }] },
    ];
    const result = handleFilterData({
      root: tree,
      cb: ({ node }) => node.value !== 2 && node.value !== 5,
    });
    expect(result).toEqual([
      { value: 1, children: [{ value: 3, children: [] }] },
      { value: 4, children: [{ value: 6, children: [] }] },
    ]);
  });

  test("should handle non-function cb", () => {
    const tree = { value: 1, children: [{ value: 2 }, { value: 3 }] };
    const result = handleFilterData({
      root: tree,
      cb: null,
    });
    expect(result).toEqual([
      {
        value: 1,
        children: [
          { value: 2, children: [] },
          { value: 3, children: [] },
        ],
      },
    ]);
  });
});
