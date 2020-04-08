FROM node:12

RUN mkdir /app
WORKDIR /app

COPY package.json /app/package.json

RUN npm install --silent

COPY . /app

EXPOSE 3000

RUN npm run build

CMD ["npm", "run" "start"]