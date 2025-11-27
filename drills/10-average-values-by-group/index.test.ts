import { averageValuesByGroup } from './index';

describe('averageValuesByGroup', () => {
  test('calculates average for single category', () => {
    expect(averageValuesByGroup([
      { category: 'A', value: 10 },
      { category: 'A', value: 20 },
      { category: 'A', value: 30 }
    ])).toEqual({ A: 20 });
  });

  test('calculates average for multiple categories', () => {
    expect(averageValuesByGroup([
      { category: 'A', value: 10 },
      { category: 'B', value: 20 },
      { category: 'A', value: 30 },
      { category: 'B', value: 40 }
    ])).toEqual({ A: 20, B: 30 });
  });

  test('handles single item per category', () => {
    expect(averageValuesByGroup([
      { category: 'X', value: 15 },
      { category: 'Y', value: 25 }
    ])).toEqual({ X: 15, Y: 25 });
  });

  test('handles empty array', () => {
    expect(averageValuesByGroup([])).toEqual({});
  });

  test('handles decimal averages', () => {
    expect(averageValuesByGroup([
      { category: 'A', value: 1 },
      { category: 'A', value: 2 },
      { category: 'A', value: 3 }
    ])).toEqual({ A: 2 });
  });

  test('handles negative values', () => {
    expect(averageValuesByGroup([
      { category: 'A', value: -10 },
      { category: 'A', value: 10 }
    ])).toEqual({ A: 0 });
  });

  test('handles many items in one category', () => {
    expect(averageValuesByGroup([
      { category: 'A', value: 1 },
      { category: 'A', value: 2 },
      { category: 'A', value: 3 },
      { category: 'A', value: 4 },
      { category: 'A', value: 5 }
    ])).toEqual({ A: 3 });
  });
});

