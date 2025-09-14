class Solution {
  /**
   * @param {string} s1
   * @param {string} s2
   * @return {boolean}
   */
  checkInclusion(s1: string, s2: string): boolean {
    const s1Length = s1.length;
    const s2Length = s2.length;

    const arr1 = Array(26).fill(0);
    const arr2 = Array(26).fill(0);

    for (let s of s1) {
      arr1[s.charCodeAt(0) - 97] += 1;
    }
    // s1Length만큼 자르기
    for (let i = 0; i < s1Length; i++) {
      arr2[s2.charCodeAt(i) - 97] += 1;
    }

    const same = (a: number[], b: number[]) => {
      for (let i = 0; i < 26; i++) {
        if (a[i] !== b[i]) return false;
      }
      return true;
    };

    if (same(arr1, arr2)) return true;

    // 슬라이딩 윈도우
    for (let i = s1Length; i < s2Length; i++) {
      arr2[s2.charCodeAt(i) - 97]++; // 오른쪽 새 문자 추가
      arr2[s2.charCodeAt(i - s1Length) - 97] -= 1; // 왼쪽 문자 제거
      if (same(arr1, arr2)) return true;
    }

    return false;
  }
}
