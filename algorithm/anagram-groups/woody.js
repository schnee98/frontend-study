// https://neetcode.io/problems/anagram-groups?list=neetcode150

class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const group = new Map();

    for (const s of strs) {
      const sig = s.split("").sort().join("");

      if (!group.has(sig)) group.set(sig, []);
      group.get(sig).push(s);
    }

    return Array.from(group.values());
  }
}
