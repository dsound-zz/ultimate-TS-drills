import { countInversions } from './index';

describe('countInversions', () => {
  test('counts inversions in unsorted array', () => {
    expect(countInversions([2, 4, 1, 3, 5])).toBe(3);
  });

  test('returns 0 for sorted array', () => {
    expect(countInversions([1, 2, 3, 4, 5])).toBe(0);
  });

  test('counts all inversions in reverse sorted array', () => {
    expect(countInversions([5, 4, 3, 2, 1])).toBe(10);
  });

  test('handles empty array', () => {
    expect(countInversions([])).toBe(0);
  });

  test('handles single element', () => {
    expect(countInversions([5])).toBe(0);
  });

  test('handles two elements', () => {
    expect(countInversions([2, 1])).toBe(1);
    expect(countInversions([1, 2])).toBe(0);
  });

  test('handles duplicate values', () => {
    expect(countInversions([2, 2, 1])).toBe(2);
  });

  test('handles larger array', () => {
    expect(countInversions([1, 20, 6, 4, 5])).toBe(5);
  });
});

