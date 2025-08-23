export class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights: number[]): number {
      let leftIndex = 0;
      let rightIndex = heights.length - 1;

      let max = 0;

      while (leftIndex < rightIndex) {
          const leftBar = heights[leftIndex];
          const rightBar = heights[rightIndex];

          const width = Math.min(leftBar, rightBar) * (rightIndex - leftIndex);
          max = Math.max(max, width);

          if(leftBar < rightBar) {
              leftIndex++
          } else {
              rightIndex--
          }
      }

      return max
  }
}
