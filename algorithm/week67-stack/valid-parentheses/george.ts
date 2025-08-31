export class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s: string): boolean {
    const stack: string[] = [];
    const map = {
      ")": "(",
      "]": "[",
      "}": "{",
    };

    for (let i = 0; i < s.length; i++) {
      const str = s[i];
      if (str === ")" || str === "}" || str === "]") {
        if (stack.pop() !== map[str]) return false;
      } else {
        stack.push(str);
      }
    }
    return stack.length === 0;
  }
}
