import { removeDuplicatesInPlace } from './index';

describe('removeDuplicatesInPlace', () => {
  test('removes duplicates from sorted array', () => {
    const nums = [1, 1, 2];
    const length = removeDuplicatesInPlace(nums);
    expect(length).toBe(2);
    expect(nums.slice(0, length)).toEqual([1, 2]);
  });

  test('handles multiple duplicates', () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    const length = removeDuplicatesInPlace(nums);
    expect(length).toBe(5);
    expect(nums.slice(0, length)).toEqual([0, 1, 2, 3, 4]);
  });

  test('handles array with no duplicates', () => {
    const nums = [1, 2, 3, 4, 5];
    const length = removeDuplicatesInPlace(nums);
    expect(length).toBe(5);
    expect(nums.slice(0, length)).toEqual([1, 2, 3, 4, 5]);
  });

  test('handles single element', () => {
    const nums = [1];
    const length = removeDuplicatesInPlace(nums);
    expect(length).toBe(1);
    expect(nums.slice(0, length)).toEqual([1]);
  });

  test('handles all same elements', () => {
    const nums = [1, 1, 1, 1];
    const length = removeDuplicatesInPlace(nums);
    expect(length).toBe(1);
    expect(nums.slice(0, length)).toEqual([1]);
  });

  test('handles empty array', () => {
    const nums: number[] = [];
    const length = removeDuplicatesInPlace(nums);
    expect(length).toBe(0);
  });
});

