# Stage 1 - The Build Process
FROM node:16.13 as build-deps
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
COPY . ./
RUN npm install
RUN NODE_OPTIONS=--max_old_space_size=4096
RUN npm run build


# Stage 2 - The Production Environment
FROM nginx:1.12-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-deps /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
