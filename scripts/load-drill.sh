#!/bin/bash

# Load a drill into the src/ directory
# Usage: ./scripts/load-drill.sh <drill-name>

if [ -z "$1" ]; then
  echo "Error: Please provide a drill name"
  echo "Usage: ./scripts/load-drill.sh <drill-name>"
      echo "Example: ./scripts/load-drill.sh 01-reverse-string"
  exit 1
fi

DRILL_NAME="$1"
DRILL_PATH="drills/${DRILL_NAME}"

if [ ! -d "$DRILL_PATH" ]; then
  echo "Error: Drill '${DRILL_NAME}' not found in drills/"
  exit 1
fi

# Check if required files exist
if [ ! -f "${DRILL_PATH}/index.ts" ]; then
  echo "Error: ${DRILL_PATH}/index.ts not found"
  exit 1
fi

if [ ! -f "${DRILL_PATH}/index.test.ts" ]; then
  echo "Error: ${DRILL_PATH}/index.test.ts not found"
  exit 1
fi

# Copy drill files to src/
cp "${DRILL_PATH}/index.ts" "src/index.ts"
cp "${DRILL_PATH}/index.test.ts" "src/index.test.ts"

echo "✅ Successfully loaded drill: ${DRILL_NAME}"
echo "📝 Files copied:"
echo "   - ${DRILL_PATH}/index.ts → src/index.ts"
echo "   - ${DRILL_PATH}/index.test.ts → src/index.test.ts"
echo ""
echo "💡 Run 'npm test' to run the tests"

