FROM node:20-alpine
WORKDIR /app

# Dependencias para compilar módulos nativos C++ (better-sqlite3)
RUN apk add --no-cache python3 make g++

# Instalar dependencias del backend
COPY package*.json ./
RUN npm install --omit=dev

# Copiar código del servidor y el frontend pre-compilado
COPY server/ ./server/
COPY client/dist/ ./client/dist/
COPY .env.example ./.env

EXPOSE 3005

CMD ["node", "server/index.js"]
