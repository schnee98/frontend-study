export class Solution {
  /**
   * @param {number} n
   * @return {string[]}
   */
  generateParenthesis(n: number): string[] {
    const result = [];
    this.dfs(n, 0, 0, "", result);
    return result;
  }

  dfs(
    n: number,
    openN: number,
    closeN: number,
    current: string,
    res: string[]
  ) {
    if (n === openN && openN === closeN) {
      res.push(current);
      return;
    }

    if (n > openN) {
      this.dfs(n, openN + 1, closeN, current + "(", res);
    }

    if (openN > closeN) {
      this.dfs(n, openN, closeN + 1, current + ")", res);
    }
  }
}
