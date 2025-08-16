export class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs: string[]) {
    const map = new Map<string, string[]>();

    for (const str of strs) {
      const sortedStr = str.split("").sort().join("");
      const hasStr = map.has(sortedStr);

      if (!hasStr) {
        map.set(sortedStr, []);
      }

      map.get(sortedStr)?.push(str);
    }
    return Array.from(map.values());
  }
}
