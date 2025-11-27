# Merge Objects With Priority

## Problem Description

Merge two objects where the second object overrides the first. Preserve nested keys (deep merge). Use spread operators where appropriate.

## Input Shape

- **Parameter 1**: `obj1: T` - The base object
- **Parameter 2**: `obj2: Partial<T>` - The object that overrides obj1

## Expected Output

- **Returns**: `T` - A merged object where obj2 values override obj1, with nested objects merged deeply

## Examples

```typescript
mergeObjectsWithPriority(
  { a: 1, b: 2 },
  { b: 3, c: 4 }
)
// { a: 1, b: 3, c: 4 }

mergeObjectsWithPriority(
  { a: 1, nested: { x: 10, y: 20 } },
  { nested: { y: 30, z: 40 } }
)
// { a: 1, nested: { x: 10, y: 30, z: 40 } }
```

## Edge Cases

- Empty objects should be handled
- Deeply nested structures should be merged recursively
- Arrays should be overwritten (not merged)
- Null and undefined values should be handled correctly

## Notes

- Use spread operators where appropriate
- Perform deep merge for nested objects
- Arrays are replaced, not merged
- The second object takes priority for all conflicts

