import { binarySearchLastOccurrence } from './index';

describe('binarySearchLastOccurrence', () => {
  test('finds last occurrence in array with duplicates', () => {
    expect(binarySearchLastOccurrence([1, 2, 2, 2, 3, 4], 2)).toBe(3);
  });

  test('finds single occurrence', () => {
    expect(binarySearchLastOccurrence([1, 2, 3, 4, 5], 3)).toBe(2);
  });

  test('returns -1 when target not found', () => {
    expect(binarySearchLastOccurrence([1, 2, 3, 4, 5], 6)).toBe(-1);
  });

  test('finds last occurrence at start', () => {
    expect(binarySearchLastOccurrence([1, 1, 1, 2, 3], 1)).toBe(2);
  });

  test('finds last occurrence at end', () => {
    expect(binarySearchLastOccurrence([1, 2, 3, 4, 4, 4], 4)).toBe(5);
  });

  test('handles empty array', () => {
    expect(binarySearchLastOccurrence([], 5)).toBe(-1);
  });

  test('handles single element array', () => {
    expect(binarySearchLastOccurrence([5], 5)).toBe(0);
    expect(binarySearchLastOccurrence([5], 3)).toBe(-1);
  });

  test('handles all same elements', () => {
    expect(binarySearchLastOccurrence([2, 2, 2, 2], 2)).toBe(3);
  });
});

