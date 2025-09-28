import { TreeNode } from "../types";

class Solution {
  invertTree(root: TreeNode | null): TreeNode | null {
    if (root == null) {
      return root;
    }

    const temp = root.right;
    root.right = root.left;
    root.left = temp;

    this.invertTree(root.left);
    this.invertTree(root.right);

    return root;
  }
}
