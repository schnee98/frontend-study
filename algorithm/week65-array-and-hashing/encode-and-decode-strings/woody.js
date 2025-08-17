// https://neetcode.io/problems/string-encode-and-decode?list=neetcode150

class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    return strs.reduce((acc, cur) => acc + `${cur.length}#${cur}`, "");
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    const result = [];
    let i = 0;

    while (i < str.length) {
      let lengthNum = "";

      while (str[i] !== "#") {
        lengthNum += str[i];
        i++;
      }

      i++;

      const length = Number(lengthNum);
      const word = str.slice(i, i + length);
      result.push(word);

      i += length;
    }

    return result;
  }
}
