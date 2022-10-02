FROM node:16

WORKDIR /src

COPY package*.json . 

RUN npm install

COPY . .

EXPOSE 8081

CMD ["node","index.js"]