class Solution {
  checkInclusion(s1: string, s2: string): boolean {
    if (s1.length > s2.length) {
      return false;
    }

    const aCode = "a".charCodeAt(0);
    const alphanumericLength = 26;
    const count1 = new Array(alphanumericLength).fill(0);
    const count2 = new Array(alphanumericLength).fill(0);

    for (let i = 0; i < s1.length; i++) {
      count1[s1.charCodeAt(i) - aCode]++;
      count2[s2.charCodeAt(i) - aCode]++;
    }

    let matches = 0;
    for (let i = 0; i < alphanumericLength; i++) {
      if (count1[i] === count2[i]) {
        matches++;
      }
    }

    const match = () => matches === alphanumericLength;

    if (match()) {
      return true;
    }

    let left = 0;
    for (let right = s1.length; right < s2.length; right++) {
      let index = s2.charCodeAt(right) - aCode;
      count2[index]++;
      if (count1[index] === count2[index]) {
        matches++;
      } else if (count1[index] + 1 === count2[index]) {
        matches--;
      }

      index = s2.charCodeAt(left) - aCode;
      count2[index]--;
      if (count1[index] === count2[index]) {
        matches++;
      } else if (count1[index] - 1 === count2[index]) {
        matches--;
      }
      left++;

      if (match()) {
        return true;
      }
    }

    return false;
  }
}
