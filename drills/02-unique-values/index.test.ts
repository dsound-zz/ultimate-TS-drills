import { uniqueValues } from './index';

describe('uniqueValues', () => {
  test('removes duplicates from array of numbers', () => {
    expect(uniqueValues([1, 2, 2, 3, 3, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  test('removes duplicates from array of strings', () => {
    expect(uniqueValues(['a', 'b', 'a', 'c', 'b'])).toEqual(['a', 'b', 'c']);
  });

  test('preserves order of first occurrence', () => {
    expect(uniqueValues([3, 1, 3, 2, 1])).toEqual([3, 1, 2]);
  });

  test('handles empty array', () => {
    expect(uniqueValues([])).toEqual([]);
  });

  test('handles array with all unique values', () => {
    expect(uniqueValues([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test('handles array with all same values', () => {
    expect(uniqueValues([1, 1, 1, 1])).toEqual([1]);
  });

  test('handles mixed types', () => {
    expect(uniqueValues([1, 'a', 1, 'b', 'a'])).toEqual([1, 'a', 'b']);
  });

  test('handles array with null and undefined', () => {
    expect(uniqueValues([null, undefined, null, undefined])).toEqual([null, undefined]);
  });
});

