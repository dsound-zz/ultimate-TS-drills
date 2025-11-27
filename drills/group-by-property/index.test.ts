import { groupByProperty } from './index';

describe('groupByProperty', () => {
  test('groups by string property', () => {
    const arr = [
      { category: 'A', value: 1 },
      { category: 'B', value: 2 },
      { category: 'A', value: 3 },
      { category: 'B', value: 4 }
    ];
    expect(groupByProperty(arr, 'category')).toEqual({
      A: [{ category: 'A', value: 1 }, { category: 'A', value: 3 }],
      B: [{ category: 'B', value: 2 }, { category: 'B', value: 4 }]
    });
  });

  test('groups by number property', () => {
    const arr = [
      { age: 20, name: 'Alice' },
      { age: 20, name: 'Bob' },
      { age: 30, name: 'Charlie' }
    ];
    const result = groupByProperty(arr, 'age');
    expect(result[20]).toHaveLength(2);
    expect(result[30]).toHaveLength(1);
  });

  test('handles empty array', () => {
    expect(groupByProperty([], 'category')).toEqual({});
  });

  test('handles single item', () => {
    const arr = [{ type: 'X', value: 1 }];
    expect(groupByProperty(arr, 'type')).toEqual({
      X: [{ type: 'X', value: 1 }]
    });
  });

  test('handles all items with same property value', () => {
    const arr = [
      { status: 'active', id: 1 },
      { status: 'active', id: 2 },
      { status: 'active', id: 3 }
    ];
    const result = groupByProperty(arr, 'status');
    expect(result.active).toHaveLength(3);
  });

  test('preserves all object properties', () => {
    const arr = [
      { group: 'A', x: 1, y: 2 },
      { group: 'A', x: 3, y: 4 }
    ];
    const result = groupByProperty(arr, 'group');
    expect(result.A[0]).toEqual({ group: 'A', x: 1, y: 2 });
    expect(result.A[1]).toEqual({ group: 'A', x: 3, y: 4 });
  });
});

