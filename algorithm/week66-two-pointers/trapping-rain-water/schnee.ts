class Solution {
  isEmpty(height: number[]) {
    return height == null || height.length === 0;
  }

  trap(height: number[]): number {
    if (this.isEmpty(height)) {
      return 0;
    }

    let left = 0;
    let right = height.length - 1;
    let leftMax = height[left];
    let rightMax = height[right];
    let result = 0;

    while (left < right) {
      if (leftMax < rightMax) {
        left++;
        leftMax = Math.max(leftMax, height[left]);
        result += leftMax - height[left];
      } else {
        right--;
        rightMax = Math.max(rightMax, height[right]);
        result += rightMax - height[right];
      }
    }

    return result;
  }
}
