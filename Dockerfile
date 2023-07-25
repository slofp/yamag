FROM node:20.5.0-bullseye

WORKDIR /yamag

COPY ./ ./

RUN npm i -g pnpm && pnpm i && pnpm build

CMD ["pnpm", "run", "mentions"]
