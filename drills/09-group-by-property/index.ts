/**
 * Group By Property
 * 
 * Given an array of objects and a key, return an object where each key value
 * maps to an array of items that have that property value.
 * Use spread/rest operators where appropriate.
 */

export function groupByProperty<T extends Record<string, any>>(
  arr: T[],
  key: keyof T
): Record<string, T[]> {
  // TODO: Implement this function
  return {};
}

