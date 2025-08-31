class Solution {
  /**
   * @param {number} n
   * @return {string[]}
   */
  generateParenthesis(n) {
    const result = [];

    function backtrack(current, left, right) {
      if (current.length === n * 2) {
        result.push(current);
        return;
      }

      if (left < n) {
        backtrack(current + "(", left + 1, right);
      }
      if (right < left) {
        backtrack(current + ")", left, right + 1);
      }
    }

    backtrack("", 0, 0);
    return result;
  }
}
