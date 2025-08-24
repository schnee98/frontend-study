class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights: number[]) {
    let left = 0;
    let right = heights.length - 1;
    let max = 0;
    while (left < right) {
      const height = Math.min(heights[right], heights[left]);
      max = Math.max(max, height * (right - left));
      if (heights[left] < heights[right]) {
        left += 1;
      } else {
        right -= 1;
      }
    }
    return max;
  }
}
