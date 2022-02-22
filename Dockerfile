FROM denoland/deno:latest

WORKDIR /app

USER deno

COPY . /app

CMD ["run", "src/index.ts"]
