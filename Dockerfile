FROM denoland/deno:1.19.2

WORKDIR /app

USER deno

COPY . /app

CMD ["deno", "run", "--allow-read", "--allow-env", "--allow-net", "src/index.ts"]
