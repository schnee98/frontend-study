interface BacktrackProps {
  openBracketCount: number;
  closeBracketCount: number;
  pairCount: number;
  result: string[];
  item: string;
}

class Solution {
  backtrack({
    openBracketCount,
    closeBracketCount,
    pairCount,
    result,
    item,
  }: BacktrackProps) {
    const isCompleteItem =
      openBracketCount === closeBracketCount && openBracketCount === pairCount;

    if (isCompleteItem) {
      result.push(item);
      return;
    }

    if (openBracketCount < pairCount) {
      this.backtrack({
        openBracketCount: openBracketCount + 1,
        closeBracketCount,
        pairCount,
        result,
        item: item + "(",
      });
    }

    if (closeBracketCount < openBracketCount) {
      this.backtrack({
        openBracketCount,
        closeBracketCount: closeBracketCount + 1,
        pairCount,
        result,
        item: item + ")",
      });
    }
  }

  generateParenthesis(n: number): string[] {
    const result = [];
    const props: BacktrackProps = {
      openBracketCount: 0,
      closeBracketCount: 0,
      pairCount: n,
      result,
      item: "",
    };

    this.backtrack(props);
    return result;
  }
}
