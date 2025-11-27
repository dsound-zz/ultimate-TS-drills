import { binarySearchInsertPosition } from './index';

describe('binarySearchInsertPosition', () => {
  test('finds insert position for existing element', () => {
    expect(binarySearchInsertPosition([1, 3, 5, 6], 5)).toBe(2);
  });

  test('finds insert position for non-existing element', () => {
    expect(binarySearchInsertPosition([1, 3, 5, 6], 2)).toBe(1);
  });

  test('finds insert position at start', () => {
    expect(binarySearchInsertPosition([1, 3, 5, 6], 0)).toBe(0);
  });

  test('finds insert position at end', () => {
    expect(binarySearchInsertPosition([1, 3, 5, 6], 7)).toBe(4);
  });

  test('handles duplicates - returns first position', () => {
    expect(binarySearchInsertPosition([1, 2, 2, 2, 3], 2)).toBe(1);
  });

  test('handles empty array', () => {
    expect(binarySearchInsertPosition([], 5)).toBe(0);
  });

  test('handles single element array', () => {
    expect(binarySearchInsertPosition([5], 3)).toBe(0);
    expect(binarySearchInsertPosition([5], 7)).toBe(1);
    expect(binarySearchInsertPosition([5], 5)).toBe(0);
  });

  test('handles all elements smaller', () => {
    expect(binarySearchInsertPosition([1, 2, 3], 10)).toBe(3);
  });

  test('handles all elements larger', () => {
    expect(binarySearchInsertPosition([5, 6, 7], 1)).toBe(0);
  });
});

