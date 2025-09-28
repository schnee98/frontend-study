import { TreeNode } from "../level-order-traversal-of-binary-tree/marron";

class Solution {
  /**
   * @param {TreeNode} p
   * @param {TreeNode} q
   * @return {boolean}
   */
  isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p && !q) {
      return true;
    }
    if (p && q && p.val === q.val) {
      return (
        this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right)
      );
    }
    return false;
  }
}
