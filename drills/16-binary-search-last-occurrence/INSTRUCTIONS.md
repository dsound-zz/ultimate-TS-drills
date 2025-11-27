# Binary Search Last Occurrence

## Problem Description

Given a sorted array and a target value, find the index of the last occurrence of the target. If not found, return -1.

## Input Shape

- **Parameter 1**: `arr: number[]` - A sorted array of numbers
- **Parameter 2**: `target: number` - The value to search for

## Expected Output

- **Returns**: `number` - The index of the last occurrence, or -1 if not found

## Examples

```typescript
binarySearchLastOccurrence([1, 2, 2, 2, 3, 4], 2)  // 3
binarySearchLastOccurrence([1, 2, 3, 4, 5], 3)      // 2
binarySearchLastOccurrence([1, 2, 3, 4, 5], 6)      // -1
binarySearchLastOccurrence([1, 1, 1, 2, 3], 1)      // 2
```

## Edge Cases

- Array with duplicates (return last occurrence)
- Target at start or end of array
- Empty array returns -1
- Single element array
- All elements are the same

## Notes

- Array is guaranteed to be sorted
- When duplicates exist, return the rightmost index
- Use binary search for O(log n) time complexity

