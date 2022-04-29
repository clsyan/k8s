from node:17-alpine

workdir /usr/src/app

copy package*.json ./

run npm install

copy . .

expose 3003

cmd [ "node", "server.js" ]
