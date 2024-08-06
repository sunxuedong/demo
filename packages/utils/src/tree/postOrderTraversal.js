// 后序遍历函数
export default function postOrderTraversal({ root, cb, rootLevel = 1 } = {}) {
  if (!root) return; // 如果根节点为空，直接返回

  const rootIsArray = Array.isArray(root);
  const arrayRoot = rootIsArray ? root : [root];

  const stack = []; // 使用一个栈来辅助迭代
  arrayRoot.forEach(node => {
    stack.push({ node, level: rootLevel, visited: false }); // 根节点入栈，初始状态为未访问
  });

  while (stack.length > 0) {
    const { node, level, visited } = stack.pop(); // 取出栈顶节点

    if (visited) {
      // 如果节点已被访问过，调用回调函数
      typeof cb === "function" && cb({ node, level });
    } else {
      // 将当前节点标记为已访问，并重新入栈
      stack.push({ node, level, visited: true });

      // 将子节点入栈，注意这里要反向遍历子节点
      if (node.children && node.children.length > 0) {
        for (let i = node.children.length - 1; i >= 0; i--) {
          stack.push({
            node: node.children[i],
            level: level + 1,
            visited: false,
          });
        }
      }
    }
  }

  return root;
}
