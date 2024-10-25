FROM node:20.18.0

WORKDIR /app
COPY . /app/

RUN npm install

CMD ["npm", "run", "start"]