class Solution {
  findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let [A, B] = nums2.length < nums1.length ? [nums2, nums1] : [nums1, nums2];
    const total = nums1.length + nums2.length;
    const half = Math.floor(total / 2);

    let left = 0;
    let right = A.length - 1;

    while (true) {
      const i = left + right;
      const j = half - i - 2;

      const Aleft = i >= 0 ? A[i] : -Infinity;
      const Aright = i + 1 < A.length ? A[i + 1] : Infinity;
      const Bleft = j >= 0 ? B[j] : -Infinity;
      const Bright = j + 1 < B.length ? B[j + 1] : Infinity;

      if (Aleft <= Bright && Bleft <= Aright) {
        if (total % 2 === 0) {
          return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
        }

        return Math.min(Aright, Bright);
      }

      if (Aleft > Bright) {
        right = i - 1;
      } else {
        left = i + 1;
      }
    }
  }
}
