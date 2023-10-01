FROM oven/bun:latest

WORKDIR .

COPY package.json ./
COPY bun.lockb ./
COPY src/ ./

RUN bun install

ENTRYPOINT ["bun", "run", "./src/main.ts"]