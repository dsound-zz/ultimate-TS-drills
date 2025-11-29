/**
 * Remove Duplicates In Place
 * 
 * Given a sorted array, remove duplicates in-place such that each element
 * appears only once. Return the new length. Use two-pointer technique.
 */


  export function removeDuplicatesInPlace(nums: number[]): number {
  // TODO: Implement two-pointer solution
  if (nums.length === 0) return 0
  let slow = 0

  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow ++
      nums[slow] = nums[fast]
    }
  }
  
  return slow + 1
}



