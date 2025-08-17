class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const map = new Map();
    for (let s of strs) {
      const key = s.split("").sort().join("");
      if (!map.has(key)) {
        map.set(key, []);
      }
      map.get(key).push(s);
    }
    return [...map.values()].sort((a, b) => a.length - b.length);
  }
}
