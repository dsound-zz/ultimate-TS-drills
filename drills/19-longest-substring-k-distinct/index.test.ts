import { longestSubstringKDistinct } from './index';

describe('longestSubstringKDistinct', () => {
  test('finds longest substring with k distinct characters', () => {
    expect(longestSubstringKDistinct('eceba', 2)).toBe(3);
  });

  test('handles k=1', () => {
    expect(longestSubstringKDistinct('aa', 1)).toBe(2);
  });

  test('handles k larger than distinct characters', () => {
    expect(longestSubstringKDistinct('abc', 5)).toBe(3);
  });

  test('handles empty string', () => {
    expect(longestSubstringKDistinct('', 2)).toBe(0);
  });

  test('handles k=0', () => {
    expect(longestSubstringKDistinct('abc', 0)).toBe(0);
  });

  test('handles single character', () => {
    expect(longestSubstringKDistinct('a', 1)).toBe(1);
  });

  test('handles complex string', () => {
    expect(longestSubstringKDistinct('araaci', 2)).toBe(4);
  });
});

