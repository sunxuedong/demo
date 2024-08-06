import levelOrderTraversal from "./levelOrderTraversal";

// 标记节点的层级
export default function markNodeLevel({ root }) {
  levelOrderTraversal({
    root,
    cb: ({ node, level }) => {
      node.level = level;
    },
  });
}
