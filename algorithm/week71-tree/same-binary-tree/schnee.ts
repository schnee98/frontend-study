import { TreeNode } from "../types";

class Solution {
  isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p == null || q == null) {
      return p === q;
    }

    return (
      p.val === q.val &&
      this.isSameTree(p.left, q.left) &&
      this.isSameTree(p.right, q.right)
    );
  }
}
