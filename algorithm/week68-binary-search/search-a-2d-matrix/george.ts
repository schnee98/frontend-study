export class Solution {
  /**
   * @param {number[][]} matrix
   * @param {number} target
   * @return {boolean}
   */
  searchMatrix(matrix: number[][], target: number): boolean {
    let leftIndex = 0;
    let rightIndex = matrix.length - 1;

    while (leftIndex <= rightIndex) {
      const m = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
      const row = matrix[m];

      if (row[0] > target) {
        rightIndex = m - 1;
      } else if (row[row.length - 1] < target) {
        leftIndex = m + 1;
      } else {
        break;
      }
    }

    if (!(leftIndex <= rightIndex)) {
      return false;
    }

    const row = leftIndex + Math.floor((rightIndex - leftIndex) / 2);

    let rowL = 0;
    let rowR = matrix[0].length - 1;

    while (rowL <= rowR) {
      const m = rowL + Math.floor((rowR - rowL) / 2);

      if (matrix[row][m] > target) {
        rowR = m - 1;
      } else if (matrix[row][m] < target) {
        rowL = m + 1;
      } else {
        return true;
      }
    }
    return false;
  }
}
