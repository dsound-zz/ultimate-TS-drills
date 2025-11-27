# Deep Clone Object

## Problem Description

Implement a deep clone function for objects without using JSON methods. Handle nested objects, arrays, primitives, and avoid circular references.

## Input Shape

- **Parameter**: `obj: T` - Any value (object, array, primitive)

## Expected Output

- **Returns**: `T` - A deep clone of the input value

## Examples

```typescript
const obj = { a: 1, nested: { x: 10 } };
const cloned = deepCloneObject(obj);
cloned.nested.x = 999;
// obj.nested.x is still 10
```

## Edge Cases

- Nested objects should be cloned recursively
- Arrays should be cloned with their elements
- Primitives should be returned as-is
- Modifying clone should not affect original
- Empty objects should be handled

## Notes

- Do NOT use JSON.parse(JSON.stringify())
- Handle nested structures recursively
- Arrays are objects and should be cloned
- Primitives (numbers, strings, null, undefined) can be returned directly

