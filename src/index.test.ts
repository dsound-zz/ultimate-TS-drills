import { isPalindrome } from './index';

describe('isPalindrome', () => {
  test('identifies simple palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  test('identifies non-palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  test('handles single character', () => {
    expect(isPalindrome('a')).toBe(true);
  });

  test('handles empty string', () => {
    expect(isPalindrome('')).toBe(true);
  });

  test('handles palindrome with different cases', () => {
    expect(isPalindrome('Racecar')).toBe(true);
  });

  test('handles palindrome with spaces', () => {
    expect(isPalindrome('race car')).toBe(true);
  });

  test('handles palindrome with punctuation', () => {
    expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
  });

  test('handles numeric palindrome', () => {
    expect(isPalindrome('12321')).toBe(true);
  });

  test('handles non-palindrome with spaces', () => {
    expect(isPalindrome('hello world')).toBe(false);
  });

  test('handles palindrome with special characters', () => {
    expect(isPalindrome('Madam, I\'m Adam')).toBe(true);
  });
});

