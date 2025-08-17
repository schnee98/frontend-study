export  class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums: number[], target: number) {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];
      const hasDiff = map.has(diff);

      if (hasDiff) {
        return [map.get(diff), i];
      }

      map.set(nums[i], i);
    }
  }
}
