#!/bin/bash
set -Eeuo pipefail

COZE_WORKSPACE_PATH="${COZE_WORKSPACE_PATH:-$(pwd)}"

cd "${COZE_WORKSPACE_PATH}"

echo "Installing dependencies..."
npm install

echo "Building frontend with Vite..."
npm run vite build

echo "Bundling server with tsup..."
npm exec tsup server/server.ts -- --format cjs --platform node --target node20 --outDir dist-server --no-splitting --no-minify

echo "Build completed successfully!"
