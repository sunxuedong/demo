// 拷贝树
export function handleFilterData({
  root,
  cb = () => true,
  children = [],
  level = 1,
}) {
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
}
