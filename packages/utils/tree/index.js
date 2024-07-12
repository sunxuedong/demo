/**
 * @description 层序遍历，遍历时调用cb
 * @param {Array|Object} options.root 根节点，或者是包含根节点的数组
 * @param {Function} cb 层序遍历节点的回调
 * @returns {Array|Object}
 */

export const levelOrderTraversal = ({ root, cb, rootLevel = 1 } = {}) => {
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
};

// 后序遍历函数
export const postOrderTraversal = ({ root, cb, rootLevel = 1 } = {}) => {
  if (!root) return; // 如果根节点为空，直接返回

  const rootIsArray = Array.isArray(root);
  const arrayRoot = rootIsArray ? root : [root];

  const stack = []; // 使用一个栈来辅助迭代
  arrayRoot.forEach(node => {
    // 将根节点和他所对应的层数入队列
    stack.push({ node, level: rootLevel });
  });

  const visited = new Set(); // 使用一个集合来记录已访问过的节点

  while (stack.length > 0) {
    const { node, level, parent } = stack[stack.length - 1];

    // 如果当前节点的所有子节点都已经访问过，则输出当前节点的值，并将当前节点出栈
    if (
      !node.children ||
      node.children.length === 0 ||
      node.children.every(child => visited.has(child))
    ) {
      typeof cb === "function" && cb({ node, level, parent });

      stack.pop();
      visited.add(node);
    } else {
      // 否则，将当前节点的未访问过的子节点入栈
      for (const child of node.children) {
        if (!visited.has(child)) {
          stack.push({ node: child, level: level + 1, parent: node });
        }
      }
    }
  }

  return root;
};

// 先序遍历函数
export const preorderTraversal = ({ root, cb, rootLevel = 1 } = {}) => {
  if (!root) return; // 如果根节点为空，直接返回

  const rootIsArray = Array.isArray(root);
  const arrayRoot = rootIsArray ? root : [root];

  const stack = []; // 使用一个栈来辅助迭代
  // 将当前节点的子节点逆序压入栈中
  for (let i = arrayRoot.length - 1; i >= 0; i--) {
    const node = arrayRoot[i];
    // 将根节点和他所对应的层数入队列
    stack.push({ node, level: rootLevel });
  }

  while (stack.length > 0) {
    const { node, level, parent } = stack.pop();
    typeof cb === "function" && cb({ node, level, parent });
    const children = Array.isArray(node.children) ? node.children : [];
    // 将当前节点的子节点逆序压入栈中
    for (let i = children.length - 1; i >= 0; i--) {
      const child = children[i];
      stack.push({ node: child, level: level + 1, parent: node });
    }
  }

  return root;
};

// 拷贝树
export const handleFilterData = ({
  root,
  cb = () => true,
  children = [],
  level = 1,
}) => {
  // 空树,直接返回
  if (!root) return;

  const rootIsArray = Array.isArray(root);
  const arrayRoot = rootIsArray ? root : [root];

  arrayRoot.forEach(node => {
    const filterResult = typeof cb === "function" ? cb({ node, level }) : true;

    if (filterResult) {
      // 筛选条件
      const newNode = {
        ...node,
        children: [],
      };
      children.push(newNode);
      node.children?.length &&
        handleFilterData({
          root: node.children,
          cb,
          children: newNode.children,
          level: level + 1,
        });
    }
  });

  return children;
};

export const flatTree = ({ tree }) => {
  let res = [];
  tree.forEach(el => {
    res.push(el);
    el.children && res.push(...flatTree({ tree: el.children }));
  });
  return res;
};

export const filterTree = ({ root, condition = () => true, rootLevel = 1 }) => {
  if (!root) return null;

  const rootIsArray = Array.isArray(root);
  const arrayRoot = rootIsArray ? root : [root];
  const copy = ({ node = {} } = {}) => {
    return {
      ...node,
      children: [],
    };
  };

  const stack = []; // 使用一个栈来辅助迭代
  let filteredTree = null;
  const filteredStack = [];
  arrayRoot.forEach(node => {
    if (condition({ node, level: rootLevel })) {
      // 将根节点和他所对应的层数入队列
      stack.push({ node, level: rootLevel });

      const filteredNode = copy({ node });
      filteredStack.push({ node: filteredNode, level: rootLevel });

      if (rootIsArray) {
        if (!filteredTree) {
          filteredTree = [];
        }
        filteredTree.push(filteredNode);
      } else {
        filteredTree = filteredNode;
      }
    }
  });

  while (stack.length > 0) {
    let { node, level } = stack.pop();
    let { node: filteredNode } = filteredStack.pop();

    if (node?.children?.length) {
      for (let child of node.children) {
        if (condition({ node: child, level: level + 1, parent: node })) {
          const newChild = copy({ node: child });
          filteredNode.children.push(newChild);
          filteredStack.push({
            node: newChild,
            level: level + 1,
            parent: filteredNode,
          });
          stack.push({ node: child, level: level + 1, parent: node });
        }
      }
    }
  }

  return filteredTree;
};

// 标记节点的层级
export const markNodeLevel = ({ root }) =>
  levelOrderTraversal({
    root,
    cb: ({ node, level }) => {
      node.level = level;
    },
  });
