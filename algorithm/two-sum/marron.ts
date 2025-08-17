class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    for (let i = nums.length - 1; i >= 0; i--) {
      let number = target - nums[i];
      if (nums.includes(number)) {
        return [nums.indexOf(number), i];
      }
    }
  }
}
