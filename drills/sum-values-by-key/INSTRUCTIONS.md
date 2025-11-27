# Sum Values By Key

## Problem Description

Given an array of objects with numeric properties, return an object where each key maps to the sum of all values for that key across all objects. Use spread/rest operators where appropriate.

## Input Shape

- **Parameter**: `arr: Record<string, number>[]` - An array of objects with numeric properties

## Expected Output

- **Returns**: `Record<string, number>` - An object where keys map to the sum of all values for that key

## Examples

```typescript
sumValuesByKey([{ a: 1 }, { a: 2 }, { a: 3 }])
// { a: 6 }

sumValuesByKey([
  { a: 1, b: 2 },
  { a: 3, b: 4 },
  { a: 5, b: 6 }
])
// { a: 9, b: 12 }

sumValuesByKey([
  { a: 1, b: 2 },
  { a: 3 },
  { b: 4 }
])
// { a: 4, b: 6 }
```

## Edge Cases

- Empty array returns empty object
- Missing keys should be treated as 0
- Negative values should be handled correctly
- Zero values should be preserved

## Notes

- Use spread/rest operators where appropriate
- Objects may have different sets of keys
- All values are numeric

