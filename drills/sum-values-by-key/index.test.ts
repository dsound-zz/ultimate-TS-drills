import { sumValuesByKey } from './index';

describe('sumValuesByKey', () => {
  test('sums values for single key', () => {
    expect(sumValuesByKey([{ a: 1 }, { a: 2 }, { a: 3 }])).toEqual({ a: 6 });
  });

  test('sums values for multiple keys', () => {
    expect(sumValuesByKey([
      { a: 1, b: 2 },
      { a: 3, b: 4 },
      { a: 5, b: 6 }
    ])).toEqual({ a: 9, b: 12 });
  });

  test('handles missing keys (treats as 0)', () => {
    expect(sumValuesByKey([
      { a: 1, b: 2 },
      { a: 3 },
      { b: 4 }
    ])).toEqual({ a: 4, b: 6 });
  });

  test('handles empty array', () => {
    expect(sumValuesByKey([])).toEqual({});
  });

  test('handles single object', () => {
    expect(sumValuesByKey([{ x: 10, y: 20 }])).toEqual({ x: 10, y: 20 });
  });

  test('handles negative values', () => {
    expect(sumValuesByKey([
      { a: 5, b: -3 },
      { a: -2, b: 7 }
    ])).toEqual({ a: 3, b: 4 });
  });

  test('handles zero values', () => {
    expect(sumValuesByKey([
      { a: 0, b: 5 },
      { a: 0, b: 0 }
    ])).toEqual({ a: 0, b: 5 });
  });
});

