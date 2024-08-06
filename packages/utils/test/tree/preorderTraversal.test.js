import preorderTraversal from "@/tree/preorderTraversal";

describe("preorderTraversal", () => {
  test("should traverse the tree in pre order", () => {
    const tree = { value: 1, children: [{ value: 2 }, { value: 3 }] };
    const result = [];
    preorderTraversal({
      root: tree,
      cb: ({ node }) => {
        result.push(node.value);
      },
    });
    expect(result).toEqual([1, 2, 3]);
  });

  test("should handle empty tree", () => {
    const result = [];
    preorderTraversal({
      root: null,
      cb: ({ node }) => {
        if (node) result.push(node.value);
      },
    });
    expect(result).toEqual([]);
  });

  test("should handle root as array", () => {
    const tree = [{ value: 1, children: [{ value: 2 }, { value: 3 }] }];
    const result = [];
    preorderTraversal({
      root: tree,
      cb: ({ node }) => {
        result.push(node.value);
      },
    });
    expect(result).toEqual([1, 2, 3]);
  });

  test("should handle tree with multiple levels", () => {
    const tree = {
      value: 1,
      children: [
        { value: 2, children: [{ value: 5 }, { value: 6 }] },
        { value: 3, children: [{ value: 7 }, { value: 8 }] },
      ],
    };
    const result = [];
    preorderTraversal({
      root: tree,
      cb: ({ node }) => {
        result.push(node.value);
      },
    });
    expect(result).toEqual([1, 2, 5, 6, 3, 7, 8]);
  });

  test("should handle tree with varying children length", () => {
    const tree = {
      value: 1,
      children: [{ value: 2 }, { value: 3, children: [{ value: 4 }] }],
    };
    const result = [];
    preorderTraversal({
      root: tree,
      cb: ({ node }) => {
        result.push(node.value);
      },
    });
    expect(result).toEqual([1, 2, 3, 4]);
  });

  test("should handle single node tree", () => {
    const tree = { value: 1 };
    const result = [];
    preorderTraversal({
      root: tree,
      cb: ({ node }) => {
        result.push(node.value);
      },
    });
    expect(result).toEqual([1]);
  });

  test("should handle tree with nodes having empty children arrays", () => {
    const tree = {
      value: 1,
      children: [{ value: 2, children: [] }, { value: 3 }],
    };
    const result = [];
    preorderTraversal({
      root: tree,
      cb: ({ node }) => {
        result.push(node.value);
      },
    });
    expect(result).toEqual([1, 2, 3]);
  });

  test("should handle tree with nodes having mixed empty and non-empty children", () => {
    const tree = {
      value: 1,
      children: [
        { value: 2, children: [] },
        { value: 3, children: [{ value: 4 }] },
        { value: 5, children: [{ value: 6, children: [] }] },
      ],
    };
    const result = [];
    preorderTraversal({
      root: tree,
      cb: ({ node }) => {
        result.push(node.value);
      },
    });
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
