class Solution {
  /**
   * @param {string} s1
   * @param {string} s2
   * @return {boolean}
   */
  checkInclusion(s1, s2) {
    if (s1.length > s2.length) return false;

    const count1 = new Array(26).fill(0);
    const count2 = new Array(26).fill(0);

    // s1 문자 빈도
    for (const ch of s1) {
      count1[ch.charCodeAt(0) - 97]++;
    }

    // 초기 윈도우
    for (let i = 0; i < s1.length; i++) {
      count2[s2.charCodeAt(i) - 97]++;
    }

    const matches = (c1, c2) => c1.every((v, i) => v === c2[i]);

    if (matches(count1, count2)) return true;

    // 윈도우 슬라이드
    for (let i = s1.length; i < s2.length; i++) {
      count2[s2.charCodeAt(i) - 97]++;
      count2[s2.charCodeAt(i - s1.length) - 97]--;
      if (matches(count1, count2)) return true;
    }

    return false;
  }
}
