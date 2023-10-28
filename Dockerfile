FROM node:18.14.2-alpine3.17

WORKDIR /Ramanda/src/app

COPY package*.json ./

RUN npm install

COPY . . 

expose 6000

CMD ["node", "app.js"]