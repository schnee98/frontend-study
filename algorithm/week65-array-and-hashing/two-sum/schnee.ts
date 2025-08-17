class Solution {
  twoSum(nums: number[], target: number): number[] {
    if (nums.length < 2) {
      throw new Error("length of numbers must be more than 1");
    }

    for (const [startIndex, currentNum] of nums.entries()) {
      if (startIndex >= nums.length - 1) {
        break;
      }

      const pairIndex = nums
        .slice(startIndex + 1)
        .findIndex((nextNum) => currentNum + nextNum === target);

      if (pairIndex > -1) {
        const matchIndex = pairIndex + startIndex + 1;

        return [startIndex, matchIndex];
      }
    }

    throw new Error("cannot find two numbers that sum to the target");
  }
}
