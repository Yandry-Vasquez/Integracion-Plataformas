FROM node:alpine

WORKDIR /app

COPY package.json . 

RUN npm install

COPY . .

EXPOSE 4200

VOLUME /app/data

CMD [ "npm","start" ]
