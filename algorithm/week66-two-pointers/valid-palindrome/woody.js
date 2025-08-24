class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    const S = s
      .replaceAll(/[^a-z A-Z 0-9]/g, "")
      .toLowerCase()
      .replaceAll(" ", "");

    const sLength = S.length;
    const halfLength = Math.floor(sLength / 2);
    for (let i = 0; i < halfLength; i++) {
      const left = S[i];
      const right = S[sLength - i - 1];
      if (left !== right) {
        return false;
      }
    }

    return true;
  }
}
