class Solution {
  groupAnagrams(strs: string[]): string[][] {
    const groups = {};

    for (const word of strs) {
      const key = word.split("").sort().join("");

      groups[key] ??= [];
      groups[key].push(word);
    }

    return Object.values(groups);
  }
}
