class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    return strs.map((s) => `${s.length}#${s}`).join("");
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    const answer = [];
    let i = 0;
    while (i < str.length) {
      let j = i;
      // # 전까지 찾기
      while (str[j] !== "#") {
        j++;
      }
      const length = +str.slice(i, j);
      const a = str.slice(j + 1, j + 1 + length);
      answer.push(a);
      i = j + 1 + length;
    }
    return answer;
  }
}
