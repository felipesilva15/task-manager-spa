FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install --silent

COPY . .

RUN mkdir -p src/data && chmod -R 777 src/data

EXPOSE 3050

CMD ["npm", "start"]
