#!/bin/bash
cd "/Users/kban-ai/framer"

# Start dev server in background and capture PID
npm run dev &
DEV_PID=$!

# Wait for server to be ready
echo "Starting dev server..."
for i in {1..20}; do
  if curl -s http://localhost:3000 > /dev/null 2>&1; then
    break
  fi
  sleep 0.5
done

# Open in browser
open http://localhost:3000

# Keep terminal open and wait for server
wait $DEV_PID
