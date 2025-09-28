import { TreeNode } from "../level-order-traversal-of-binary-tree/marron";

class Solution {
  /**
   * @param {TreeNode} root
   * @return {TreeNode}
   */
  invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null;
    [root.left, root.right] = [root.right, root.left];
    this.invertTree(root.left);
    this.invertTree(root.right);
    return root;
  }
}
