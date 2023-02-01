
FROM node:18-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package*.json ./

RUN npm ci
# npx tailwindcss -o build.css --minify
# RUN npm run build

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

