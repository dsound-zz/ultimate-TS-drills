import { maxSumSubarrayFixedWindow } from './index';

describe('maxSumSubarrayFixedWindow', () => {
  test('finds maximum sum of fixed window', () => {
    expect(maxSumSubarrayFixedWindow([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
  });

  test('handles window size equal to array length', () => {
    expect(maxSumSubarrayFixedWindow([1, 2, 3], 3)).toBe(6);
  });

  test('handles window size of 1', () => {
    expect(maxSumSubarrayFixedWindow([1, 2, 3, 4], 1)).toBe(4);
  });

  test('handles negative numbers', () => {
    expect(maxSumSubarrayFixedWindow([-1, -2, -3, -4], 2)).toBe(-3);
  });

  test('handles mixed positive and negative', () => {
    expect(maxSumSubarrayFixedWindow([2, -1, 5, 1, 3, 2], 3)).toBe(9);
  });

  test('handles single element array', () => {
    expect(maxSumSubarrayFixedWindow([5], 1)).toBe(5);
  });
});

