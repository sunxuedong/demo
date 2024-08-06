/**
 * @description 层序遍历，遍历时调用cb
 * @param {Array|Object} options.root 根节点，或者是包含根节点的数组
 * @param {Function} cb 层序遍历节点的回调
 * @returns {Array|Object}
 */

export default function levelOrderTraversal({ root, cb, rootLevel = 1 }) {
  // 空树,直接返回
  if (!root) return;

  const rootIsArray = Array.isArray(root);
  const arrayRoot = rootIsArray ? root : [root];

  // 队列维护树的每层节点
  const queue = [];
  arrayRoot.forEach(node => {
    // 将根节点和他所对应的层数入队列
    queue.push({ node, level: rootLevel, parent: null, parentList: [] });
  });

  // 循环队列
  while (queue.length) {
    // 出队
    const { node, level, parentList, parent } = queue.shift();
    // 调用回调
    const breakLoop =
      typeof cb === "function" && cb({ node, level, parentList, parent });

    if (breakLoop) break;

    if (Array.isArray(node.children) && node.children.length) {
      const parent = node;
      node.children.forEach(node => {
        queue.push({
          node,
          level: level + 1,
          parent,
          parentList: [parent, ...parentList],
        });
      });
    }
  }

  return root;
}
