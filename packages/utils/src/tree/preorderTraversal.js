// 先序遍历函数
export default function preorderTraversal({ root, cb, rootLevel = 1 }) {
  if (!root) return; // 如果根节点为空，直接返回

  const rootIsArray = Array.isArray(root);
  const arrayRoot = rootIsArray ? root : [root];

  const stack = []; // 使用一个栈来辅助迭代
  // 将当前节点的子节点逆序压入栈中
  for (let i = arrayRoot.length - 1; i >= 0; i--) {
    const node = arrayRoot[i];
    // 将根节点和他所对应的层数入队列
    stack.push({ node, level: rootLevel, parent: null, parentList: [] });
  }

  while (stack.length > 0) {
    const { node, level, parent, parentList } = stack.pop();
    typeof cb === "function" && cb({ node, level, parent, parentList });
    const children = Array.isArray(node.children) ? node.children : [];
    // 将当前节点的子节点逆序压入栈中
    for (let i = children.length - 1; i >= 0; i--) {
      const parent = node;
      const child = children[i];
      stack.push({
        node: child,
        level: level + 1,
        parent,
        parentList: [...parentList, parent],
      });
    }
  }

  return root;
}
