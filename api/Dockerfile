# Etapa de compilación (build)
FROM node:14 AS builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

# Etapa de producción
FROM node:14-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY --from=builder /usr/src/app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/main.js"]
