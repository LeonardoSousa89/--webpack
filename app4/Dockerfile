FROM node:16

WORKDIR /dist

COPY package*.json . 

RUN npm install

COPY . .

EXPOSE 3003

CMD ["node","app.js"]