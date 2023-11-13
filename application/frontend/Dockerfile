# Build environment
FROM node:14 as build

# Set working directory in container
WORKDIR /app

# Install dependencies
COPY package.json /app
RUN npm install

COPY . /app

# Build the app
RUN npm run build

# Production environment
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Copy nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx and serve the app
CMD ["nginx", "-g", "daemon off;"]
