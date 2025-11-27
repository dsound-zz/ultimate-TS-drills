# Two Sum Sorted

## Problem Description

Given a sorted array of integers and a target sum, find two numbers that add up to the target. Return their indices as [i, j] where i < j. Use two-pointer technique.

## Input Shape

- **Parameter 1**: `arr: number[]` - A sorted array of integers
- **Parameter 2**: `target: number` - The target sum

## Expected Output

- **Returns**: `[number, number] | null` - Indices of the two numbers, or null if no solution exists

## Examples

```typescript
twoSumSorted([2, 7, 11, 15], 9)  // [0, 1]
twoSumSorted([1, 2, 3, 4, 5], 7)  // [2, 3]
twoSumSorted([1, 2, 3, 4], 10)    // null
```

## Edge Cases

- No solution exists (return null)
- Negative numbers should be handled
- Duplicate values may exist
- Two element array
- Target is zero

## Notes

- Array is sorted (ascending)
- Use two-pointer technique starting from both ends
- Return indices, not values
- Time complexity should be O(n)

