# Unique Values

## Problem Description

Write a function that takes an array and returns an array containing only unique values. The order should be preserved based on the first occurrence of each value.

## Input Shape

- **Parameter**: `arr: T[]` - An array of any type

## Expected Output

- **Returns**: `T[]` - An array containing only unique values, preserving the order of first occurrence

## Examples

```typescript
uniqueValues([1, 2, 2, 3, 3, 3, 4])        // [1, 2, 3, 4]
uniqueValues(['a', 'b', 'a', 'c', 'b'])   // ['a', 'b', 'c']
uniqueValues([3, 1, 3, 2, 1])             // [3, 1, 2]
uniqueValues([])                          // []
uniqueValues([1, 1, 1, 1])                // [1]
```

## Notes

- Preserve the order based on first occurrence
- Handle edge cases: empty arrays, arrays with all unique values, arrays with all duplicates
- The function should work with any type of array elements

