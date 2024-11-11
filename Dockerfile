
FROM node:20.18.0-alpine as base

WORKDIR /app

FROM base as builder

RUN apk add --no-cache curl \ 
    && curl -sf https://gobinaries.com/tj/node-prune | sh -s -- -b /usr/local/bin \
    && apk del curl

COPY . .
RUN npm i
RUN npm run build

FROM base as production

ENV NODE_ENV production

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]
