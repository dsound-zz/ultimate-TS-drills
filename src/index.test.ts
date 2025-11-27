import { reverseString } from './index';

describe('reverseString', () => {
  test('reverses a simple string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('reverses a string with spaces', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });

  test('handles single character', () => {
    expect(reverseString('a')).toBe('a');
  });

  test('handles empty string', () => {
    expect(reverseString('')).toBe('');
  });

  test('handles string with special characters', () => {
    expect(reverseString('!@#$')).toBe('$#@!');
  });

  test('handles string with numbers', () => {
    expect(reverseString('12345')).toBe('54321');
  });

  test('handles palindrome', () => {
    expect(reverseString('racecar')).toBe('racecar');
  });
});

