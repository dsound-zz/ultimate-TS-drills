/**
 * Reverse Vowels
 * 
 * Given a string, reverse only the vowels (a, e, i, o, u) while keeping
 * consonants in their original positions. Use two-pointer technique.
 */

export function reverseVowels(s: string): string {
  const vowels = new Set("aeiouAEIOU");
  const strAry = s.split("");
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // Move left pointer until it finds a vowel
    while (left < right && !vowels.has(strAry[left])) {
      left++;
    }
    // Move right pointer until it finds a vowel
    while (left < right && !vowels.has(strAry[right])) {
      right--;
    }
    // Swap vowels if both pointers haven't crossed
    if (left < right) {
      [strAry[left], strAry[right]] = [strAry[right], strAry[left]];
      left++;
      right--;
    }
  }
  return strAry.join("");
}

