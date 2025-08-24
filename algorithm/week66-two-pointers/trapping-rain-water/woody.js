class Solution {
  /**
   * @param {number[]} height
   * @return {number}
   */
  trap(height) {
    let leftIdx = 0;
    let rightIdx = height.length - 1;

    let maxWater = 0;
    let leftMax = 0;
    let rightMax = 0;

    while (leftIdx < rightIdx) {
      leftMax = Math.max(leftMax, height[leftIdx]);
      rightMax = Math.max(rightMax, height[rightIdx]);

      if (leftMax < rightMax) {
        maxWater += leftMax - height[leftIdx];
        leftIdx++;
      } else {
        maxWater += rightMax - height[rightIdx];
        rightIdx--;
      }
    }
    return maxWater;
  }
}
