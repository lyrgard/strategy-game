FROM node:10-alpine

WORKDIR /strategyGame

# Install node modules in a first layer (infrequent changes)
COPY package.json package-lock.json ./
RUN npm install

# Install remaining parts (frequent changes)
COPY . ./
RUN npm run build

EXPOSE 3000
ENTRYPOINT ["npm", "start"]
