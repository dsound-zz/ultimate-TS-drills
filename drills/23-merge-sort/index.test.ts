import { mergeSort } from './index';

describe('mergeSort', () => {
  test('sorts array of numbers', () => {
    expect(mergeSort([3, 1, 4, 1, 5, 9, 2, 6])).toEqual([1, 1, 2, 3, 4, 5, 6, 9]);
  });

  test('handles already sorted array', () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('handles reverse sorted array', () => {
    expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test('handles empty array', () => {
    expect(mergeSort([])).toEqual([]);
  });

  test('handles single element', () => {
    expect(mergeSort([5])).toEqual([5]);
  });

  test('handles duplicate values', () => {
    expect(mergeSort([2, 2, 2, 1, 1])).toEqual([1, 1, 2, 2, 2]);
  });

  test('handles negative numbers', () => {
    expect(mergeSort([-3, -1, -2, 0, 1])).toEqual([-3, -2, -1, 0, 1]);
  });
});

