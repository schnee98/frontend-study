export class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs: string[]): string {
    return strs.map((str) => `${str.length}#${str}`).join("");
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str: string): string[] {
    const result: string[] = [];
    let i = 0;
    while (i < str.length) {
      const hashIndex = str.indexOf("#", i);
      const length = parseInt(str.slice(i, hashIndex));
      result.push(str.slice(hashIndex + 1, hashIndex + 1 + length));
      i = hashIndex + 1 + length;
    }
    return result;
  }
}
