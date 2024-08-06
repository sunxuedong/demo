import postOrderTraversal from "@/tree/postOrderTraversal";

describe("postOrderTraversal", () => {
  test("should traverse the tree in post order", () => {
    const tree = { value: 1, children: [{ value: 2 }, { value: 3 }] };
    const result = [];
    postOrderTraversal({
      root: tree,
      cb: ({ node }) => {
        result.push(node.value);
      },
    });
    expect(result).toEqual([2, 3, 1]);
  });

  test("should handle empty tree", () => {
    const result = [];
    postOrderTraversal({
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
    postOrderTraversal({
      root: tree,
      cb: ({ node }) => {
        result.push(node.value);
      },
    });
    expect(result).toEqual([2, 3, 1]);
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
    postOrderTraversal({
      root: tree,
      cb: ({ node }) => {
        result.push(node.value);
      },
    });
    expect(result).toEqual([5, 6, 2, 7, 8, 3, 1]);
  });

  test("should handle tree with varying children length", () => {
    const tree = {
      value: 1,
      children: [{ value: 2 }, { value: 3, children: [{ value: 4 }] }],
    };
    const result = [];
    postOrderTraversal({
      root: tree,
      cb: ({ node }) => {
        result.push(node.value);
      },
    });
    expect(result).toEqual([2, 4, 3, 1]);
  });

  test("should handle single node tree", () => {
    const tree = { value: 1 };
    const result = [];
    postOrderTraversal({
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
    postOrderTraversal({
      root: tree,
      cb: ({ node }) => {
        result.push(node.value);
      },
    });
    expect(result).toEqual([2, 3, 1]);
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
    postOrderTraversal({
      root: tree,
      cb: ({ node }) => {
        result.push(node.value);
      },
    });
    expect(result).toEqual([2, 4, 3, 6, 5, 1]);
  });
});
