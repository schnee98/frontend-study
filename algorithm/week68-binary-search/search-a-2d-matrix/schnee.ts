class Solution {
  /**
   * @param {number[][]} matrix
   * @param {number} target
   * @return {boolean}
   */
  searchMatrix(matrix: number[][], target: number): boolean {
    const flattenMatrix = matrix.flat();
    let length = flattenMatrix.length;
    let left = 0;
    let right = length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (flattenMatrix[mid] === target) {
        return true;
      }

      if (flattenMatrix[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return false;
  }
}
