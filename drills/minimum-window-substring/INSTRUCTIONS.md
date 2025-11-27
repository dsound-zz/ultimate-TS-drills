# Minimum Window Substring

## Problem Description

Given two strings s and t, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. Return empty string if no such window exists. Use sliding window technique.

## Input Shape

- **Parameter 1**: `s: string` - The source string
- **Parameter 2**: `t: string` - The target string (characters to find)

## Expected Output

- **Returns**: `string` - The minimum window substring, or empty string if not found

## Examples

```typescript
minimumWindowSubstring('ADOBECODEBANC', 'ABC')  // 'BANC'
minimumWindowSubstring('a', 'aa')              // ''
minimumWindowSubstring('a', 'a')               // 'a'
```

## Edge Cases

- No valid window exists (return empty string)
- Window at start or end of string
- Duplicate characters in t must all be present
- Single character match

## Notes

- Use sliding window technique
- Track character frequencies
- Expand window until all characters found
- Shrink window while maintaining validity
- Return minimum valid window

