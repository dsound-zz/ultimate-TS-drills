# Restructure Users

## Problem Description

Convert an array of user objects into an ID → user lookup table (object). Each user object should have an 'id' property. Use spread operators to create the lookup table.

## Input Shape

- **Parameter**: `users: User[]` - An array of user objects with at least an `id` property

## Expected Output

- **Returns**: `Record<number, User>` - An object where keys are user IDs and values are the full user objects

## Examples

```typescript
restructureUsers([
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' }
])
// {
//   1: { id: 1, name: 'Alice', email: 'alice@example.com' },
//   2: { id: 2, name: 'Bob', email: 'bob@example.com' }
// }
```

## Edge Cases

- Empty array returns empty object
- Single user returns object with one key-value pair
- Non-sequential IDs should be handled correctly
- Additional properties should be preserved

## Notes

- Use spread operators to build the lookup table
- Each user object must have an 'id' property
- Preserve all properties of the user objects

