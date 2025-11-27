/**
 * Reverse String
 * 
 * Write a function that takes a string and returns it reversed.
 */

export function reverseString(str: string): string {
  // TODO: Implement this function
  if (!str.length || str.length === 1) return str

  const arr = str.split("")

  let left = 0
  let right = str.length - 1

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]]
    left++ 
    right--
  }
  return arr.join("")
}

