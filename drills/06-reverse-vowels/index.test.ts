import { reverseVowels } from './index';

describe('reverseVowels', () => {
  test('reverses vowels in simple string', () => {
    expect(reverseVowels('hello')).toBe('holle');
  });

  test('reverses vowels in "leetcode"', () => {
    expect(reverseVowels('leetcode')).toBe('leotcede');
  });

  test('handles string with no vowels', () => {
    expect(reverseVowels('bcdfg')).toBe('bcdfg');
  });

  test('handles string with only vowels', () => {
    expect(reverseVowels('aeiou')).toBe('uoiea');
  });

  test('handles uppercase vowels', () => {
    expect(reverseVowels('HELLO')).toBe('HOLLE');
  });

  test('handles mixed case', () => {
    expect(reverseVowels('aA')).toBe('Aa');
  });

  test('handles empty string', () => {
    expect(reverseVowels('')).toBe('');
  });

  test('handles single character', () => {
    expect(reverseVowels('a')).toBe('a');
    expect(reverseVowels('b')).toBe('b');
  });
});

