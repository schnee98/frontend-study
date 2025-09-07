class Solution {
  /**
   * @param {number[][]} matrix
   * @param {number} target
   * @return {boolean}
   */
  searchMatrix(matrix, target) {
    for (let m of matrix) {
      if (m.includes(target)) {
        return true;
      }
    }
    return false;
  }
}
