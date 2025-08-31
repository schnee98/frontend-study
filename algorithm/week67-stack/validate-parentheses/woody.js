class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    const stack = [];

    for (const ch of s) {
      if (ch === "]" && stack.pop() !== "[") return false;
      if (ch === "}" && stack.pop() !== "{") return false;
      if (ch === ")" && stack.pop() !== "(") return false;
      stack.push(ch);
    }
    return stack.length === 0;
    //   return true // [ 일떄 false 나와야함 여기서 true 나옴
  }
}
