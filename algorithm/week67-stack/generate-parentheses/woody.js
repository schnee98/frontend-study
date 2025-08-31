class Solution {
  /**
   * @param {number} n
   * @return {string[]}
   */
  generateParenthesis(n) {
    let result = [];

    const backtrack = (openCount, closeCount, curString) => {
      // 1. 종료 조건
      if (openCount === n && closeCount === n) {
        result.push(curString);
        return;
      }

      // 2. 여는 괄호 추가 가능하면
      if (openCount < n) {
        backtrack(openCount + 1, closeCount, curString + "(");
      }

      // 3. 닫는 괄호 추가 가능하면
      if (closeCount < openCount) {
        backtrack(openCount, closeCount + 1, curString + ")");
      }
    };

    backtrack(0, 0, "");

    return result;
  }
}

// 백트래킹은 모든 경우의 수를 완전 탐색하는 방식과 달리 가지치기(Pruning)를 통해 불필요한 탐색을 줄이는 것이 특징
