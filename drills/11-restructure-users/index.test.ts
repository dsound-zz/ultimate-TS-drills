import { restructureUsers } from './index';

describe('restructureUsers', () => {
  test('converts array to id-based lookup', () => {
    const users = [
      { id: 1, name: 'Alice', email: 'alice@example.com' },
      { id: 2, name: 'Bob', email: 'bob@example.com' },
      { id: 3, name: 'Charlie', email: 'charlie@example.com' }
    ];
    
    const result = restructureUsers(users);
    expect(result).toEqual({
      1: { id: 1, name: 'Alice', email: 'alice@example.com' },
      2: { id: 2, name: 'Bob', email: 'bob@example.com' },
      3: { id: 3, name: 'Charlie', email: 'charlie@example.com' }
    });
  });

  test('handles empty array', () => {
    expect(restructureUsers([])).toEqual({});
  });

  test('handles single user', () => {
    const users = [{ id: 1, name: 'Alice', email: 'alice@example.com' }];
    expect(restructureUsers(users)).toEqual({
      1: { id: 1, name: 'Alice', email: 'alice@example.com' }
    });
  });

  test('preserves additional properties', () => {
    const users = [
      { id: 1, name: 'Alice', email: 'alice@example.com', age: 30, role: 'admin' }
    ];
    const result = restructureUsers(users);
    expect(result[1]).toEqual({
      id: 1,
      name: 'Alice',
      email: 'alice@example.com',
      age: 30,
      role: 'admin'
    });
  });

  test('handles non-sequential IDs', () => {
    const users = [
      { id: 10, name: 'Alice', email: 'alice@example.com' },
      { id: 5, name: 'Bob', email: 'bob@example.com' },
      { id: 20, name: 'Charlie', email: 'charlie@example.com' }
    ];
    const result = restructureUsers(users);
    expect(Object.keys(result)).toEqual(['10', '5', '20']);
    expect(result[10].name).toBe('Alice');
    expect(result[5].name).toBe('Bob');
    expect(result[20].name).toBe('Charlie');
  });
});

