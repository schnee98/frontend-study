import { TreeNode } from "../types";

class Solution {
  levelOrder(root: TreeNode) {
    return this.deepOrder(root);
  }

  deepOrder(node: TreeNode | null, result: number[][] = [], depth = 0) {
    if (node == null) {
      return result;
    }

    result[depth] ??= [];
    result[depth].push(node.val);
    this.deepOrder(node.left, result, depth + 1);
    this.deepOrder(node.right, result, depth + 1);

    return result;
  }
}
