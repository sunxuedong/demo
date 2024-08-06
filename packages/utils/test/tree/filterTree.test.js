import filterTree from "@/tree/filterTree";

describe("filterTree", () => {
  test("should filter the tree based on condition", () => {
    const tree = { value: 1, children: [{ value: 2 }, { value: 3 }] };
    const result = filterTree({
      root: tree,
      condition: ({ node }) => node.value !== 2,
    });
    expect(result).toEqual({
      value: 1,
      children: [{ value: 3, children: [] }],
    });
  });

  test("should handle empty tree", () => {
    const result = filterTree({ root: null });
    expect(result).toBeNull();
  });

  test("should handle array root", () => {
    const tree = [{ value: 1, children: [{ value: 2 }, { value: 3 }] }];
    const result = filterTree({
      root: tree,
      condition: ({ node }) => node.value !== 2,
    });
    expect(result).toEqual([
      { value: 1, children: [{ value: 3, children: [] }] },
    ]);
  });

  test("should handle array root with multiple elements", () => {
    const tree = [
      { value: 1, children: [{ value: 2 }, { value: 3 }] },
      { value: 4, children: [{ value: 5 }, { value: 6 }] },
    ];
    const result = filterTree({
      root: tree,
      condition: ({ node }) => node.value !== 2 && node.value !== 5,
    });
    expect(result).toEqual([
      { value: 1, children: [{ value: 3, children: [] }] },
      { value: 4, children: [{ value: 6, children: [] }] },
    ]);
  });

  test("should handle no children", () => {
    const tree = { value: 1 };
    const result = filterTree({ root: tree });
    expect(result).toEqual({ value: 1, children: [] });
  });

  test("should handle condition that returns false", () => {
    const tree = { value: 1, children: [{ value: 2 }, { value: 3 }] };
    const result = filterTree({
      root: tree,
      condition: ({ node }) => false,
    });
    expect(result).toBeNull();
  });

  test("should handle condition that returns true", () => {
    const tree = { value: 1, children: [{ value: 2 }, { value: 3 }] };
    const result = filterTree({
      root: tree,
      condition: ({ node }) => true,
    });
    expect(result).toEqual({
      value: 1,
      children: [
        { value: 2, children: [] },
        { value: 3, children: [] },
      ],
    });
  });

  test("should handle multiple levels", () => {
    const tree = {
      value: 1,
      children: [
        { value: 2, children: [{ value: 4 }, { value: 5 }] },
        { value: 3, children: [{ value: 6 }, { value: 7 }] },
      ],
    };
    const result = filterTree({
      root: tree,
      condition: ({ node }) => node.value !== 4,
    });
    expect(result).toEqual({
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
    });
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
    const result = filterTree({
      root: tree,
      condition: ({ node }) => node.value !== 6,
    });
    expect(result).toEqual({
      value: 1,
      children: [
        { value: 2, children: [] },
        { value: 3, children: [{ value: 4, children: [] }] },
        { value: 5, children: [] },
      ],
    });
  });

  test("should handle deep nested structure", () => {
    const tree = {
      value: 1,
      children: [
        {
          value: 2,
          children: [
            { value: 4, children: [{ value: 8 }, { value: 9 }] },
            { value: 5 },
          ],
        },
        { value: 3, children: [{ value: 6 }, { value: 7 }] },
      ],
    };
    const result = filterTree({
      root: tree,
      condition: ({ node }) => node.value !== 8,
    });
    expect(result).toEqual({
      value: 1,
      children: [
        {
          value: 2,
          children: [
            { value: 4, children: [{ value: 9, children: [] }] },
            { value: 5, children: [] },
          ],
        },
        {
          value: 3,
          children: [
            { value: 6, children: [] },
            { value: 7, children: [] },
          ],
        },
      ],
    });
  });

  test("should handle condition function using level", () => {
    const tree = {
      value: 1,
      children: [
        { value: 2, children: [{ value: 4 }, { value: 5 }] },
        { value: 3, children: [{ value: 6 }, { value: 7 }] },
      ],
    };
    const result = filterTree({
      root: tree,
      condition: ({ node, level }) => level < 2 || node.value !== 6,
    });
    expect(result).toEqual({
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
    });
  });

  test("should handle condition function using parent", () => {
    const tree = {
      value: 1,
      children: [
        { value: 2, children: [{ value: 4 }, { value: 5 }] },
        { value: 3, children: [{ value: 6 }, { value: 7 }] },
      ],
    };
    const result = filterTree({
      root: tree,
      condition: ({ node, parent }) => !parent || parent.value !== 2,
    });
    expect(result).toEqual({
      value: 1,
      children: [
        { value: 2, children: [] },
        {
          value: 3,
          children: [
            { value: 6, children: [] },
            { value: 7, children: [] },
          ],
        },
      ],
    });
  });
});
