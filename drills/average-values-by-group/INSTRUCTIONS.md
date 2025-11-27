# Average Values By Group

## Problem Description

Given an array of objects with 'category' and 'value' properties, return an object where each category maps to the average value for that category. Use spread/rest operators where appropriate.

## Input Shape

- **Parameter**: `arr: CategoryValue[]` - An array of objects with `category: string` and `value: number`

## Expected Output

- **Returns**: `Record<string, number>` - An object where each category maps to its average value

## Examples

```typescript
averageValuesByGroup([
  { category: 'A', value: 10 },
  { category: 'A', value: 20 },
  { category: 'A', value: 30 }
])
// { A: 20 }

averageValuesByGroup([
  { category: 'A', value: 10 },
  { category: 'B', value: 20 },
  { category: 'A', value: 30 },
  { category: 'B', value: 40 }
])
// { A: 20, B: 30 }
```

## Edge Cases

- Empty array returns empty object
- Single item per category returns that value
- Decimal averages should be calculated correctly
- Negative values should be handled

## Notes

- Use spread/rest operators where appropriate
- Average should be the sum divided by count
- Rounding behavior: use standard division (may result in decimals)

