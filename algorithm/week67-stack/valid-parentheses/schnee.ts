class Solution {
  isValid(text: string): boolean {
    if (text.length % 2 !== 0) {
      return false;
    }

    const stack: string[] = [];
    const map = {
      "{": "}",
      "[": "]",
      "(": ")",
    };

    for (const character of text) {
      if (isOpenBracket(character)) {
        stack.push(character);
      }

      if (stack.length !== 0 && isCloseBracket(character)) {
        const openBracket = stack.pop() as string;

        if (map[openBracket] !== character) {
          return false;
        }
      }
    }

    return stack.length === 0;
  }
}

function isOpenBracket(character: string) {
  return character === "{" || character === "[" || character === "(";
}

function isCloseBracket(character: string) {
  return character === "}" || character === "]" || character === ")";
}
