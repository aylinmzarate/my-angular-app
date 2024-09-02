# Etapa 1: Construir la aplicación Angular
FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# Etapa 2: Servir la aplicación construida
FROM nginx:alpine
COPY --from=build /app/dist/MyFrontendApp /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
