/**
 * Unique Values
 * 
 * Write a function that takes an array and returns an array containing only unique values.
 * The order should be preserved based on first occurrence.
 */

export function uniqueValues<T>(arr: T[]): T[] {
  // TODO: Implement this function
  const seen = new Set()
  const result: T[] = []

  for (const val of arr) {
    if (!seen.has(val)) {
      seen.add(val)
      result.push(val)
    }
  }
  return result
}

