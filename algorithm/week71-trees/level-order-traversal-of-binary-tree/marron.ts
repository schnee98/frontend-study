export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class Solution {
  /**
   * @param {TreeNode} root
   * @return {number[][]}
   */
  levelOrder(root: TreeNode | null): number[][] {
    const arr: number[][] = [];

    function dfs(r: TreeNode | null, depth: number) {
      if (!r) return;

      arr[depth] ??= [];
      arr[depth].push(r.val);
      
      dfs(r.left, depth + 1);
      dfs(r.right, depth + 1);
    }

    dfs(root, 0);
    return arr;
  }
}
