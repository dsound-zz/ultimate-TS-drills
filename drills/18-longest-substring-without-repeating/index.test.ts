import { longestSubstringWithoutRepeating } from './index';

describe('longestSubstringWithoutRepeating', () => {
  test('finds longest substring', () => {
    expect(longestSubstringWithoutRepeating('abcabcbb')).toBe(3);
  });

  test('handles single character string', () => {
    expect(longestSubstringWithoutRepeating('bbbbb')).toBe(1);
  });

  test('handles all unique characters', () => {
    expect(longestSubstringWithoutRepeating('pwwkew')).toBe(3);
  });

  test('handles empty string', () => {
    expect(longestSubstringWithoutRepeating('')).toBe(0);
  });

  test('handles single character', () => {
    expect(longestSubstringWithoutRepeating('a')).toBe(1);
  });

  test('handles string with spaces', () => {
    expect(longestSubstringWithoutRepeating(' ')).toBe(1);
  });

  test('handles mixed case', () => {
    expect(longestSubstringWithoutRepeating('aAbBcC')).toBe(6);
  });
});

