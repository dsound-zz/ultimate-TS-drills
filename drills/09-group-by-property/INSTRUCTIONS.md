# Group By Property

## Problem Description

Given an array of objects and a key, return an object where each key value maps to an array of items that have that property value. Use spread/rest operators where appropriate.

## Input Shape

- **Parameter 1**: `arr: T[]` - An array of objects
- **Parameter 2**: `key: keyof T` - The property key to group by

## Expected Output

- **Returns**: `Record<string, T[]>` - An object where keys are property values and values are arrays of matching objects

## Examples

```typescript
groupByProperty([
  { category: 'A', value: 1 },
  { category: 'B', value: 2 },
  { category: 'A', value: 3 }
], 'category')
// {
//   A: [{ category: 'A', value: 1 }, { category: 'A', value: 3 }],
//   B: [{ category: 'B', value: 2 }]
// }
```

## Edge Cases

- Empty array returns empty object
- Single item returns object with one key-value pair
- All items with same property value grouped together
- Preserves all object properties in grouped arrays

## Notes

- Use spread/rest operators where appropriate
- Property values are converted to strings for object keys
- Original objects are preserved in the grouped arrays

