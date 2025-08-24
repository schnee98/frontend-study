class Solution {
  /**
   * @param {number[]} height
   * @return {number}
   */
  trap(height: number[]) {
    let left = 0;
    let right = height.length - 1;
    let maxLeft = 0,
      maxRight = 0;
    let result = 0;

    while (left < right) {
      if (height[left] < height[right]) {
        if (height[left] >= maxLeft) {
          maxLeft = height[left];
        } else {
          // 젤 높은거 - 현재 높이
          result += maxLeft - height[left];
        }
        left += 1;
      } else {
        if (height[right] >= maxRight) {
          maxRight = height[right];
        } else {
          result += maxRight - height[right];
        }
        right -= 1;
      }
    }
    return result;
  }
}
