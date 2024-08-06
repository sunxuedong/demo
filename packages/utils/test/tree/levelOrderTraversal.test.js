import levelOrderTraversal from "@/tree/levelOrderTraversal";

describe("levelOrderTraversal", () => {
  test("should traverse the tree in level order", () => {
    const tree = { value: 1, children: [{ value: 2 }, { value: 3 }] };
    const result = [];
    levelOrderTraversal({
      root: tree,
      cb: ({ node }) => {
        result.push(node.value);
      },
    });
    expect(result).toEqual([1, 2, 3]);
  });

  test("should handle empty tree", () => {
    const result = [];
    levelOrderTraversal({
      root: null,
      cb: ({ node }) => {
        result.push(node.value);
      },
    });
    expect(result).toEqual([]);
  });

  test("should handle array root", () => {
    const tree = [{ value: 1, children: [{ value: 2 }, { value: 3 }] }];
    const result = [];
    levelOrderTraversal({
      root: tree,
      cb: ({ node }) => {
        result.push(node.value);
      },
    });
    expect(result).toEqual([1, 2, 3]);
  });

  test("should stop traversal if callback returns true", () => {
    const tree = { value: 1, children: [{ value: 2 }, { value: 3 }] };
    const result = [];
    levelOrderTraversal({
      root: tree,
      cb: ({ node }) => {
        result.push(node.value);
        return node.value === 2;
      },
    });
    expect(result).toEqual([1, 2]);
  });

  test("should respect rootLevel parameter", () => {
    const tree = { value: 1, children: [{ value: 2 }, { value: 3 }] };
    const levels = [];
    levelOrderTraversal({
      root: tree,
      rootLevel: 5,
      cb: ({ level }) => {
        levels.push(level);
      },
    });
    expect(levels).toEqual([5, 6, 6]);
  });

  test("testing case on rootLevel parameter is null", () => {
    const tree = { value: 1, children: [{ value: 2 }, { value: 3 }] };
    const levels = [];
    levelOrderTraversal({
      root: tree,
      rootLevel: void 0,
      cb: ({ level }) => {
        levels.push(level);
      },
    });
    expect(levels).toEqual([1, 2, 2]);
  });

  test("should handle deeply nested structure with rootLevel", () => {
    const tree = {
      value: 1,
      children: [
        { value: 2, children: [{ value: 4 }, { value: 5 }] },
        { value: 3, children: [{ value: 6 }, { value: 7 }] },
      ],
    };
    const levels = [];
    levelOrderTraversal({
      root: tree,
      rootLevel: 2,
      cb: ({ level }) => {
        levels.push(level);
      },
    });
    expect(levels).toEqual([2, 3, 3, 4, 4, 4, 4]);
  });

  test("should handle non-function cb", () => {
    const tree = { value: 1, children: [{ value: 2 }, { value: 3 }] };
    const result = levelOrderTraversal({
      root: tree,
      cb: null,
    });
    expect(result).toEqual(tree);
  });

  test("should pass correct parent and parentList", () => {
    const tree = {
      value: 1,
      children: [
        { value: 2, children: [{ value: 4 }, { value: 5 }] },
        { value: 3, children: [{ value: 6 }, { value: 7 }] },
      ],
    };
    const parentInfo = [];
    levelOrderTraversal({
      root: tree,
      cb: ({ node, parent, parentList }) => {
        parentInfo.push({
          node: node.value,
          parent: parent ? parent.value : null,
          parentList: parentList.map(p => p.value),
        });
      },
    });
    expect(parentInfo).toEqual([
      { node: 1, parent: null, parentList: [] },
      { node: 2, parent: 1, parentList: [1] },
      { node: 3, parent: 1, parentList: [1] },
      { node: 4, parent: 2, parentList: [2, 1] },
      { node: 5, parent: 2, parentList: [2, 1] },
      { node: 6, parent: 3, parentList: [3, 1] },
      { node: 7, parent: 3, parentList: [3, 1] },
    ]);
  });
});
