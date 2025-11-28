import { maxOccurrence } from './index';

describe('maxOccurrence', () => {
  test('finds most frequent character in string', () => {
    expect(maxOccurrence('hello')).toBe('l');
  });

  test('finds most frequent character with tie (returns first)', () => {
    expect(maxOccurrence('hello world')).toBe('l');
  });

  test('handles single character string', () => {
    expect(maxOccurrence('a')).toBe('a');
  });

  test('handles empty string', () => {
    expect(maxOccurrence('')).toBe('');
  });

  test('handles string with all same characters', () => {
    expect(maxOccurrence('aaaa')).toBe('a');
  });

  test('handles string with numbers', () => {
    expect(maxOccurrence('112233')).toBe('1');
  });

  test('handles array of numbers', () => {
    expect(maxOccurrence([1, 2, 2, 3, 3, 3])).toBe(3);
  });

  test('handles array of strings', () => {
    expect(maxOccurrence(['a', 'b', 'a', 'c', 'a'])).toBe('a');
  });

  test('handles array with tie (returns first)', () => {
    expect(maxOccurrence([1, 2, 2, 1])).toBe(1);
  });

  test('handles empty array', () => {
    expect(maxOccurrence([])).toBe(undefined);
  });

  test('handles string with spaces', () => {
    expect(maxOccurrence('hello world')).toBe('l');
  });
});

