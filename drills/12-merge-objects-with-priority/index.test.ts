import { mergeObjectsWithPriority } from './index';

describe('mergeObjectsWithPriority', () => {
  test('merges flat objects with second overriding first', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 3, c: 4 };
    expect(mergeObjectsWithPriority(obj1, obj2)).toEqual({ a: 1, b: 3, c: 4 });
  });

  test('preserves nested objects (deep merge)', () => {
    const obj1 = { a: 1, nested: { x: 10, y: 20 } };
    const obj2 = { nested: { y: 30, z: 40 } };
    const result = mergeObjectsWithPriority(obj1, obj2);
    expect(result).toEqual({ a: 1, nested: { x: 10, y: 30, z: 40 } });
  });

  test('handles empty objects', () => {
    expect(mergeObjectsWithPriority({}, { a: 1 })).toEqual({ a: 1 });
    expect(mergeObjectsWithPriority({ a: 1 }, {})).toEqual({ a: 1 });
  });

  test('handles deeply nested structures', () => {
    const obj1 = {
      level1: {
        level2: {
          a: 1,
          b: 2
        },
        x: 10
      }
    };
    const obj2 = {
      level1: {
        level2: {
          b: 3,
          c: 4
        }
      }
    };
    const result = mergeObjectsWithPriority(obj1, obj2);
    expect(result.level1.level2).toEqual({ a: 1, b: 3, c: 4 });
    expect(result.level1.x).toBe(10);
  });

  test('overwrites arrays (not merging them)', () => {
    const obj1 = { items: [1, 2, 3] };
    const obj2 = { items: [4, 5] };
    expect(mergeObjectsWithPriority(obj1, obj2)).toEqual({ items: [4, 5] });
  });

  test('handles null and undefined values', () => {
    const obj1 = { a: 1, b: null };
    const obj2 = { b: undefined, c: 2 };
    const result = mergeObjectsWithPriority(obj1, obj2);
    expect(result.b).toBeUndefined();
    expect(result.c).toBe(2);
  });
});

