/**
 * Is Palindrome
 * 
 * Write a function that checks if a string is a palindrome.
 * A palindrome is a word, phrase, number, or other sequence of characters
 * that reads the same forward and backward (ignoring case, spaces, and punctuation).
 */

export function isPalindrome(str: string): boolean {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  
  let left = 0;
  let right = cleanedStr.length - 1;

  while (left < right) {
    if (cleanedStr[left] !== cleanedStr[right]) return false;
    left++;
    right--;
  }
  
  return true;
}

