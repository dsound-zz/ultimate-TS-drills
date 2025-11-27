import { binarySearchFirstOccurrence } from './index';

describe('binarySearchFirstOccurrence', () => {
  test('finds first occurrence in array with duplicates', () => {
    expect(binarySearchFirstOccurrence([1, 2, 2, 2, 3, 4], 2)).toBe(1);
  });

  test('finds single occurrence', () => {
    expect(binarySearchFirstOccurrence([1, 2, 3, 4, 5], 3)).toBe(2);
  });

  test('returns -1 when target not found', () => {
    expect(binarySearchFirstOccurrence([1, 2, 3, 4, 5], 6)).toBe(-1);
  });

  test('finds first occurrence at start', () => {
    expect(binarySearchFirstOccurrence([1, 1, 1, 2, 3], 1)).toBe(0);
  });

  test('finds first occurrence at end', () => {
    expect(binarySearchFirstOccurrence([1, 2, 3, 4, 4, 4], 4)).toBe(3);
  });

  test('handles empty array', () => {
    expect(binarySearchFirstOccurrence([], 5)).toBe(-1);
  });

  test('handles single element array', () => {
    expect(binarySearchFirstOccurrence([5], 5)).toBe(0);
    expect(binarySearchFirstOccurrence([5], 3)).toBe(-1);
  });

  test('handles all same elements', () => {
    expect(binarySearchFirstOccurrence([2, 2, 2, 2], 2)).toBe(0);
  });
});

