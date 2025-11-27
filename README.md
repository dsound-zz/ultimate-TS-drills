# Ultimate TypeScript Drills

A repository for practicing TypeScript coding drills, organized from easy to medium difficulty.

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Load a drill:
```bash
npm run drill <drill-name>
# Example: npm run drill reverse-string
```

3. Run tests:
```bash
npm test
```

## Available Drills

- `reverse-string` - Reverse a string
- `unique-values` - Get unique values from an array
- `array-chunk` - Split an array into chunks
- `is-palindrome` - Check if a string is a palindrome
- `max-occurrence` - Find the most frequent character/element

## Project Structure

```
ultimate-TS-drills/
  drills/          # All drill exercises
  src/             # Active drill files (dynamically replaced)
  scripts/         # Utility scripts
```

Each drill contains:
- `index.ts` - Starter code with function signature
- `index.test.ts` - Jest tests
- `INSTRUCTIONS.md` - Problem description and examples

## How It Works

The `load-drill.sh` script copies a drill's files into the `src/` directory, allowing you to work on one drill at a time without conflicts.

# ultimate-TS-drills
