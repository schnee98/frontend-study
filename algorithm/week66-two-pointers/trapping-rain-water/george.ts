export class Solution {
  /**
   * @param {number[]} height
   * @return {number}
   */
  trap(height: number[]): number {
    const prefixMax = new Array(height.length).fill(0);
    const suffixMax = new Array(height.length).fill(0);

    let leftMax = 0;
    let rightMax = 0;

    for (let i = 0; i < height.length; i++) {
      leftMax = Math.max(leftMax, height[i]);
      prefixMax[i] = leftMax;
    }

    for (let i = height.length - 1; i >= 0; i--) {
      rightMax = Math.max(rightMax, height[i]);
      suffixMax[i] = rightMax;
    }

    let total = 0;

    for (let i = 0; i < height.length; i++) {
      const min = Math.min(prefixMax[i], suffixMax[i]);
      if (height[i] < min) {
        total += min - height[i];
      }
    }

    return total;
  }
}
