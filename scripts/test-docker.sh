#!/bin/bash

# Docker-based Playwright test runner for OS-independent testing
# Usage: ./test-docker.sh [playwright options]
# Examples: 
#   ./test-docker.sh                           # Run all tests
#   ./test-docker.sh --project=functional     # Run only functional tests
#   ./test-docker.sh --project=visual         # Run only visual tests
#   ./test-docker.sh --update-snapshots       # Update visual test screenshots

set -e

IMAGE_NAME="playwright-tests"

echo "🐳 Building Docker image for tests..."
docker build -t $IMAGE_NAME .

echo "🧪 Running Playwright tests in Docker..."
docker run --rm \
    -v "$(pwd)/test-results:/app/test-results" \
    -v "$(pwd)/playwright-report:/app/playwright-report" \
    -v "$(pwd)/tests:/app/tests" \
    $IMAGE_NAME "$@"

echo "✅ Tests completed!"