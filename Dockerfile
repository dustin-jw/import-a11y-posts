FROM denoland/deno:latest

WORKDIR /app

USER deno

COPY . /app

CMD ["deno", "run", "--allow-read", "--allow-env", "--allow-net", "src/index.ts"]
