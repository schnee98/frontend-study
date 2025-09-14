class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;

    prices.forEach((e, i) => {
      const currentProfit = prices[i] - minPrice; // 이 부분을 생각해내지 못했음
      maxProfit = Math.max(maxProfit, currentProfit);
      minPrice = Math.min(minPrice, prices[i]);
    });

    return maxProfit;
  }
}
