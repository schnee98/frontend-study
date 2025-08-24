const alphanumericCharCodes: [number, number][] = [
  [48, 57], // numbers
  [65, 90], // A-Z
  [97, 122], // a-z
];

class Solution {
  isAlphanumericCode(charCode: number) {
    return alphanumericCharCodes.some(
      ([min, max]) => min <= charCode && max >= charCode
    );
  }

  isPalindrome(input: string): boolean {
    const normalized = input.split(" ").join("");
    let characters = [];

    for (const char of normalized) {
      const charCode = char.charCodeAt(0);

      if (this.isAlphanumericCode(charCode)) {
        characters.push(char);
      }
    }

    return (
      characters.join("").toLowerCase() ===
      characters.toReversed().join("").toLowerCase()
    );
  }
}
