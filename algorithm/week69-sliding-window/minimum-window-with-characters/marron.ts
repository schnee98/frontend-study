class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {string}
   */
  minWindow(s: string, t: string): string {
    let arr = {};
    for (let str of t) {
      arr[str] = (arr[str] || 0) + 1;
    }

    let left = 0;
    let count = 0;
    let minStart = 0;
    let minLen = Infinity;
    let have = {};

    for (let right = 0; right < s.length; right++) {
      let str = s[right];
      have[str] = (have[str] || 0) + 1;

      if (arr[str] && have[str] <= arr[str]) {
        count++;
      }

      while (count === t.length) {
        if (right - left + 1 < minLen) {
          minLen = right - left + 1;
          minStart = left;
        }
        let leftStr = s[left];
        have[leftStr]--;

        if (arr[leftStr] && have[leftStr] < arr[leftStr]) {
          count--;
        }
        left++;
      }
    }
    return minLen === Infinity ? "" : s.slice(minStart, minStart + minLen);
  }
}
