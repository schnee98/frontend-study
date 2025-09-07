class Solution {
  /**
   * @param {number[]} nums1
   * @param {number[]} nums2
   * @return {number}
   */
  findMedianSortedArrays(nums1, nums2) {
      const merged = nums1.concat(nums2);
      merged.sort((a, b) => a - b);

      if(merged.length % 2 === 0) {
          return ((merged[merged.length / 2 - 1]) + (merged[merged.length / 2])) / 2.0
      } else {
          return merged[Math.floor(merged.length / 2)]
      }
  }
}
