import { arrayChunk } from './index';

describe('arrayChunk', () => {
  test('splits array into chunks of specified size', () => {
    expect(arrayChunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });

  test('splits array into chunks of size 3', () => {
    expect(arrayChunk([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
  });

  test('handles array evenly divisible by chunk size', () => {
    expect(arrayChunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
  });

  test('handles chunk size larger than array length', () => {
    expect(arrayChunk([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
  });

  test('handles empty array', () => {
    expect(arrayChunk([], 2)).toEqual([]);
  });

  test('handles chunk size of 1', () => {
    expect(arrayChunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
  });

  test('handles string array', () => {
    expect(arrayChunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
  });

  test('handles single element array', () => {
    expect(arrayChunk([1], 2)).toEqual([[1]]);
  });
});

