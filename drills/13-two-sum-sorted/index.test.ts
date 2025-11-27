import { twoSumSorted } from './index';

describe('twoSumSorted', () => {
  test('finds two numbers that sum to target', () => {
    const result = twoSumSorted([2, 7, 11, 15], 9);
    expect(result).toEqual([0, 1]);
  });

  test('finds numbers in middle of array', () => {
    const result = twoSumSorted([1, 2, 3, 4, 5], 7);
    expect(result).toEqual([2, 3]);
  });

  test('returns null when no solution exists', () => {
    expect(twoSumSorted([1, 2, 3, 4], 10)).toBeNull();
  });

  test('handles negative numbers', () => {
    const result = twoSumSorted([-3, -1, 0, 2, 5], -1);
    expect(result).toEqual([0, 2]);
  });

  test('handles duplicate values', () => {
    const result = twoSumSorted([1, 2, 2, 3], 4);
    expect(result).toEqual([1, 2]);
  });

  test('handles two element array', () => {
    const result = twoSumSorted([1, 2], 3);
    expect(result).toEqual([0, 1]);
  });

  test('handles target zero', () => {
    const result = twoSumSorted([-2, -1, 0, 1, 2], 0);
    expect(result).toEqual([0, 4]);
  });
});

