# Max Occurrence

## Problem Description

Write a function that finds the character (or element) that appears most frequently in a string (or array). If there's a tie, return the one that appears first in the original input.

## Input Shape

- **Parameter**: `input: string | any[]` - Either a string or an array of any type

## Expected Output

- **Returns**: `string | any` - The character or element that appears most frequently. For strings, returns a string; for arrays, returns the element type.

## Examples

```typescript
maxOccurrence('hello')                    // 'l' (appears 2 times)
maxOccurrence('hello world')              // 'l' (appears 3 times, first among ties)
maxOccurrence('a')                        // 'a'
maxOccurrence('')                         // ''
maxOccurrence('aaaa')                     // 'a'
maxOccurrence([1, 2, 2, 3, 3, 3])        // 3 (appears 3 times)
maxOccurrence(['a', 'b', 'a', 'c', 'a']) // 'a' (appears 3 times)
maxOccurrence([1, 2, 2, 1, 1])           // 1 (appears 2 times, but appears first)
```

## Notes

- If there's a tie in frequency, return the element that appears first in the original input
- Handle edge cases: empty strings/arrays, single element, all same elements
- The function should work with both strings and arrays
- For empty arrays, you may return `undefined` or handle as appropriate

