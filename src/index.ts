/**
 * Array Chunk
 * 
 * Write a function that splits an array into chunks of a specified size.
 * The last chunk may be smaller than the specified size if the array length
 * is not evenly divisible by the chunk size.
 */

export function arrayChunk<T>(arr: T[], size: number): T[][] {
  if (arr.length === 0) return [];
  if (size <= 0) return [];

  const result: T[][] = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}

