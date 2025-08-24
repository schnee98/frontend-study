class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights) {
    let idx1 = 0;
    let idx2 = heights.length - 1;
    let maxWater = 0;

    while (idx1 < idx2) {
      const leftValue = heights[idx1];
      const rightValue = heights[idx2];
      const water = Math.min(heights[idx1], heights[idx2]) * (idx2 - idx1);
      maxWater = Math.max(maxWater, water);

      leftValue < rightValue ? idx1++ : idx2--;
    }

    return maxWater;
  }
}
