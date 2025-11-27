import { quickSort } from './index';

describe('quickSort', () => {
  test('sorts array of numbers', () => {
    const arr = [3, 1, 4, 1, 5, 9, 2, 6];
    quickSort(arr);
    expect(arr).toEqual([1, 1, 2, 3, 4, 5, 6, 9]);
  });

  test('handles already sorted array', () => {
    const arr = [1, 2, 3, 4, 5];
    quickSort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  test('handles reverse sorted array', () => {
    const arr = [5, 4, 3, 2, 1];
    quickSort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  test('handles empty array', () => {
    const arr: number[] = [];
    quickSort(arr);
    expect(arr).toEqual([]);
  });

  test('handles single element', () => {
    const arr = [5];
    quickSort(arr);
    expect(arr).toEqual([5]);
  });

  test('handles duplicate values', () => {
    const arr = [2, 2, 2, 1, 1];
    quickSort(arr);
    expect(arr).toEqual([1, 1, 2, 2, 2]);
  });

  test('handles negative numbers', () => {
    const arr = [-3, -1, -2, 0, 1];
    quickSort(arr);
    expect(arr).toEqual([-3, -2, -1, 0, 1]);
  });
});

