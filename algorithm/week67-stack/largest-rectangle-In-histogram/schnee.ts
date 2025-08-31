class Solution {
  largestRectangleArea(heights: number[]): number {
    let maxArea: number = 0;
    const heightEntries: [number, number][] = [];

    for (const index of Array(heights.length)) {
      let start = index;

      while (shouldGetMaxArea(heights, heightEntries, index)) {
        const [lastIndex, height] = heightEntries.pop() as [number, number];
        maxArea = Math.max(maxArea, height * (index - lastIndex));
        start = lastIndex;
      }

      heightEntries.push([start, heights[index]]);
    }

    for (const [index, height] of heightEntries) {
      maxArea = Math.max(maxArea, height * (heights.length - index));
    }
    return maxArea;
  }
}

function shouldGetMaxArea(
  heights: number[],
  heightEntries: [number, number][],
  index: number
) {
  if (heightEntries.length < 1) {
    return false;
  }

  const [, height] = heightEntries[heightEntries.length - 1] ?? [];

  if (height == null || heights[index] == null) {
    return false;
  }

  return height > heights[index];
}
