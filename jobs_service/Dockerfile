FROM node:14-slim

WORKDIR /app

COPY ./package.json ./
COPY ./yarn.lock ./
RUN npm install 
RUN yarn install

COPY . .

EXPOSE 5001

CMD ["npm", "run", "dev"]