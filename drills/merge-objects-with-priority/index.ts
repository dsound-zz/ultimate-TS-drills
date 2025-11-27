/**
 * Merge Objects With Priority
 * 
 * Merge two objects where the second object overrides the first.
 * Preserve nested keys (deep merge). Use spread operators where appropriate.
 */

export function mergeObjectsWithPriority<T extends Record<string, any>>(
  obj1: T,
  obj2: Partial<T>
): T {
  // TODO: Implement deep merge where obj2 overrides obj1
  return obj1;
}

