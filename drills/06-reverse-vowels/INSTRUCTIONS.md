# Reverse Vowels

## Problem Description

Given a string, reverse only the vowels (a, e, i, o, u) while keeping consonants in their original positions. Use two-pointer technique.

## Input Shape

- **Parameter**: `s: string` - A string of any length

## Expected Output

- **Returns**: `string` - String with vowels reversed

## Examples

```typescript
reverseVowels('hello')     // 'holle'
reverseVowels('leetcode')   // 'leotcede'
reverseVowels('bcdfg')      // 'bcdfg'
reverseVowels('aeiou')      // 'uoiea'
```

## Edge Cases

- No vowels (return original)
- Only vowels (reverse all)
- Uppercase vowels should be handled
- Mixed case
- Empty string
- Single character

## Notes

- Vowels are a, e, i, o, u (case-insensitive)
- Consonants stay in place
- Use two-pointer technique
- Swap vowels from both ends moving inward

