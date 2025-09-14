class Solution {
  minWindow(s, t) {
    if (t.length === 0) {
      return "";
    }

    const need = {};

    for (let char of t) {
      need[char] = (need[char] ?? 0) + 1;
    }

    const window = {};
    let have = 0;
    const needSize = Object.keys(need).length;

    let result = [-1, 0, 0];
    let left = 0;

    for (let right = 0; right < s.length; right++) {
      const c = s[right];
      window[c] = (window[c] ?? 0) + 1;

      if (need[c] && window[c] === need[c]) {
        have++;
      }

      while (have === needSize) {
        if (result[0] === -1 || right - left + 1 < result[0]) {
          result = [right - left + 1, left, right];
        }

        const leftChar = s[left];
        window[leftChar] = window[leftChar] - 1;

        if (need[leftChar] && window[leftChar] < need[leftChar]) {
          have--;
        }
        left++;
      }
    }

    return result[0] === -1 ? "" : s.slice(result[1], result[2] + 1);
  }
}
