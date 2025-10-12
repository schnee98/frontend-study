/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
  /**
   * @param {TreeNode} root
   * @return {number[][]}
   */
  levelOrder(root) {
    if (!root) return [];
    let Q = [root];
    let result = [];

    while (Q.length > 0) {
      let levelArray = [];
      const QLength = Q.length;

      for (let i = 0; i < QLength; i++) {
        const node = Q.shift();
        levelArray.push(node.val);

        if (node.left) Q.push(node.left);
        if (node.right) Q.push(node.right);
      }

      result.push(levelArray);
    }

    return result;
  }
}
