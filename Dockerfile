# Usar la imagen oficial de Node.js para compilar la aplicación Angular
FROM node:14 as build-stage
WORKDIR /app

# Copiar los archivos del proyecto y las dependencias
COPY package*.json ./
RUN npm install

# Copiar el resto de la aplicación y compilarla
COPY . .
RUN npm run build --prod

# Usar una imagen de Nginx para servir la aplicación compilada
FROM nginx:alpine
COPY --from=build-stage /app/dist/my-angular-app /usr/share/nginx/html

# Exponer el puerto 80 para el frontend
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
