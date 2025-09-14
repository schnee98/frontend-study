class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices: number[]): number {
    let min = prices[0];
    let max = 0;

    for (let p of prices) {
      max = Math.max(max, p - min);
      min = Math.min(min, p);
    }
    return max;
  }
}
