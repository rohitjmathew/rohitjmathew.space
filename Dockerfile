FROM mcr.microsoft.com/playwright:v1.58.2-noble

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Enhanced test runner script for all test types
RUN echo '#!/bin/bash\nnpm start &\nSERVER_PID=$!\necho "Waiting for server..."\nuntil curl -s http://localhost:3000 > /dev/null; do sleep 1; done\necho "Server ready!"\nnpx playwright test --config=playwright.docker.config.ts "$@"\nTEST_EXIT_CODE=$?\nkill $SERVER_PID 2>/dev/null || true\nexit $TEST_EXIT_CODE' > /app/run-tests.sh && chmod +x /app/run-tests.sh

ENTRYPOINT ["/app/run-tests.sh"]