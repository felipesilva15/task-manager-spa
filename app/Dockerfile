# Etapa 1 - Build React
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install --silent

COPY . .

ARG REACT_APP_BASE_URL_API
ARG REACT_APP_NODE_ENV

ENV REACT_APP_BASE_URL_API=$REACT_APP_BASE_URL_API
ENV REACT_APP_NODE_ENV=$REACT_APP_NODE_ENV

RUN npm run build --silent

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

COPY ./docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
