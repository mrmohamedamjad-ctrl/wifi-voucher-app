# Simple production Dockerfile for the WiFi Voucher MVP
FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install --omit=dev || npm install --only=prod

# Copy all files (except those in .dockerignore)
COPY . .

# No need to create /data, since we use ./app.db in container
ENV PORT=8080
EXPOSE 8080

CMD ["node", "server/index.js"]
