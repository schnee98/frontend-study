class Solution {
  /**
   * @param {number[]} nums1
   * @param {number[]} nums2
   * @return {number}
   */
  findMedianSortedArrays(nums1, nums2) {
      const arr = [...nums1, ...nums2].sort((a,b) => a - b);
      return arr.length % 2 === 1 ? arr[(arr.length - 1) / 2] : (arr[arr.length / 2] + arr[(arr.length / 2) - 1]) / 2
  }
}
