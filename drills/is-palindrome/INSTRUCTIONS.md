# Is Palindrome

## Problem Description

Write a function that checks if a string is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward. For this problem, ignore case, spaces, and punctuation.

## Input Shape

- **Parameter**: `str: string` - A string of any length

## Expected Output

- **Returns**: `boolean` - `true` if the string is a palindrome, `false` otherwise

## Examples

```typescript
isPalindrome('racecar')                    // true
isPalindrome('hello')                       // false
isPalindrome('a')                          // true
isPalindrome('')                           // true
isPalindrome('Racecar')                    // true
isPalindrome('race car')                   // true
isPalindrome('A man a plan a canal Panama') // true
isPalindrome('12321')                      // true
isPalindrome('Madam, I\'m Adam')          // true
```

## Notes

- Ignore case (uppercase/lowercase should be treated the same)
- Ignore spaces and punctuation
- Empty strings are considered palindromes
- Single characters are considered palindromes

