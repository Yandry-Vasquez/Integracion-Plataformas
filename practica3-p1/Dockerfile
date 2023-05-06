FROM node:19-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

ENV PORT=4000

ENV MONGO_URI='mongodb+srv://admin:admin@cluster0.6cmrtjq.mongodb.net/?retryWrites=true&w=majority'

RUN npm run test

RUN rm -r test && rm -r node_modules

RUN npm install --prod

CMD [ "npm", "start" ]