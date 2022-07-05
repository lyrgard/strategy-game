### STAGE 1:BUILD ###
FROM node:17-alpine AS build

WORKDIR /strategyGame

# Install node modules in a first layer (infrequent changes)
COPY package.json package-lock.json ./
RUN npm install

# Install remaining parts (frequent changes)
COPY . ./
RUN npm run build --prod

### STAGE 2:RUN ###
FROM httpd:latest

COPY --from=build /strategyGame/dist/strategyGame /usr/local/apache2/htdocs/

EXPOSE 80
