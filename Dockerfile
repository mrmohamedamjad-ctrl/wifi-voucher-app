# Simple production Dockerfile for the WiFi Voucher MVP
FROM node:20-alpine

WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install --omit=dev || npm install --only=prod

COPY src ./src
RUN mkdir -p data

ENV PORT=8080
EXPOSE 8080
CMD ["node", "src/index.js"]
