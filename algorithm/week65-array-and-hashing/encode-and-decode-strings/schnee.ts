class Solution {
  key = "\n";

  encode(strs: string[]): string {
    return strs.map((str) => str.length + this.key + str).join("");
  }

  decode(str: string): string[] {
    const result: string[] = [];
    let i = 0;

    while (i < str.length) {
      const dividerIndex = str.indexOf(this.key, i);
      const length = parseInt(str.substring(i, dividerIndex));
      const startIndex = dividerIndex + 1;
      const endIndex = startIndex + length;

      result.push(str.substring(startIndex, endIndex));
      i = endIndex;
    }

    return result;
  }
}
