/**
 * Max Occurrence
 * 
 * Write a function that finds the character (or element) that appears most frequently
 * in a string (or array). If there's a tie, return the one that appears first.
 */

export function maxOccurrence(input: string | any[]): string | any {
  // TODO: Implement this function
  if (typeof input === 'string' && !input.length) return ''
  const inputArray = typeof input === "string" ? input.split("") : input
  
  if (!inputArray.length) return undefined
  if (inputArray.length === 1) return inputArray[0]

  const countMap = new Map<any, number>();

  let maxCount = 0;


  for (const ele of inputArray) {
    const count = (countMap.get(ele) ?? 0) + 1;
    countMap.set(ele, count);

    if (count > maxCount) {
      maxCount = count;
    }
  }


  for (const ele of inputArray) {
    if (countMap.get(ele) === maxCount) {
      return ele
    }
  }

  return undefined
}

