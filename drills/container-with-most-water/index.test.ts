import { containerWithMostWater } from './index';

describe('containerWithMostWater', () => {
  test('finds maximum area', () => {
    expect(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });

  test('handles two elements', () => {
    expect(containerWithMostWater([1, 1])).toBe(1);
  });

  test('handles increasing heights', () => {
    expect(containerWithMostWater([1, 2, 3, 4, 5])).toBe(6);
  });

  test('handles decreasing heights', () => {
    expect(containerWithMostWater([5, 4, 3, 2, 1])).toBe(6);
  });

  test('handles same heights', () => {
    expect(containerWithMostWater([3, 3, 3, 3])).toBe(9);
  });

  test('handles single peak', () => {
    expect(containerWithMostWater([1, 2, 1])).toBe(2);
  });

  test('handles array with zeros', () => {
    expect(containerWithMostWater([0, 2, 0])).toBe(0);
  });
});

