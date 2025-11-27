import { minimumWindowSubstring } from './index';

describe('minimumWindowSubstring', () => {
  test('finds minimum window containing all characters', () => {
    expect(minimumWindowSubstring('ADOBECODEBANC', 'ABC')).toBe('BANC');
  });

  test('returns empty string when no window exists', () => {
    expect(minimumWindowSubstring('a', 'aa')).toBe('');
  });

  test('handles single character match', () => {
    expect(minimumWindowSubstring('a', 'a')).toBe('a');
  });

  test('handles window at start', () => {
    expect(minimumWindowSubstring('ab', 'a')).toBe('a');
  });

  test('handles window at end', () => {
    expect(minimumWindowSubstring('ba', 'a')).toBe('a');
  });

  test('handles duplicate characters in t', () => {
    expect(minimumWindowSubstring('a', 'aa')).toBe('');
    expect(minimumWindowSubstring('aa', 'aa')).toBe('aa');
  });

  test('handles longer example', () => {
    expect(minimumWindowSubstring('bba', 'ab')).toBe('ba');
  });
});

