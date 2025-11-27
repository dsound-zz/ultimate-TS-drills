# Longest Substring Without Repeating

## Problem Description

Given a string, find the length of the longest substring without repeating characters. Use sliding window technique.

## Input Shape

- **Parameter**: `s: string` - A string of any length

## Expected Output

- **Returns**: `number` - The length of the longest substring without repeating characters

## Examples

```typescript
longestSubstringWithoutRepeating('abcabcbb')  // 3 (substring: "abc")
longestSubstringWithoutRepeating('bbbbb')     // 1 (substring: "b")
longestSubstringWithoutRepeating('pwwkew')    // 3 (substring: "wke")
```

## Edge Cases

- Empty string returns 0
- Single character returns 1
- All same characters
- All unique characters
- String with spaces

## Notes

- Use sliding window technique
- Track characters in current window
- Expand window when no duplicates
- Shrink window when duplicate found

