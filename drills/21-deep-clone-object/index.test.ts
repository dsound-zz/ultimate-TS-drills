import { deepCloneObject } from './index';

describe('deepCloneObject', () => {
  test('clones simple object', () => {
    const obj = { a: 1, b: 2 };
    const cloned = deepCloneObject(obj);
    expect(cloned).toEqual(obj);
    expect(cloned).not.toBe(obj);
  });

  test('clones nested objects', () => {
    const obj = { a: 1, nested: { x: 10, y: 20 } };
    const cloned = deepCloneObject(obj);
    expect(cloned).toEqual(obj);
    expect(cloned.nested).not.toBe(obj.nested);
  });

  test('clones arrays', () => {
    const obj = { items: [1, 2, 3] };
    const cloned = deepCloneObject(obj);
    expect(cloned.items).toEqual([1, 2, 3]);
    expect(cloned.items).not.toBe(obj.items);
  });

  test('clones arrays with objects', () => {
    const obj = { items: [{ a: 1 }, { b: 2 }] };
    const cloned = deepCloneObject(obj);
    expect(cloned.items[0]).not.toBe(obj.items[0]);
    expect(cloned.items[0]).toEqual({ a: 1 });
  });

  test('handles primitives', () => {
    expect(deepCloneObject(5)).toBe(5);
    expect(deepCloneObject('hello')).toBe('hello');
    expect(deepCloneObject(null)).toBe(null);
  });

  test('modifying clone does not affect original', () => {
    const obj = { a: 1, nested: { x: 10 } };
    const cloned = deepCloneObject(obj);
    cloned.a = 999;
    cloned.nested.x = 888;
    expect(obj.a).toBe(1);
    expect(obj.nested.x).toBe(10);
  });

  test('handles deeply nested structures', () => {
    const obj = {
      level1: {
        level2: {
          level3: {
            value: 42
          }
        }
      }
    };
    const cloned = deepCloneObject(obj);
    cloned.level1.level2.level3.value = 999;
    expect(obj.level1.level2.level3.value).toBe(42);
  });

  test('handles empty object', () => {
    expect(deepCloneObject({})).toEqual({});
  });
});

