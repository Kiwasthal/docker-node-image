FROM node:19-alpine

RUN apk add --no-cache tini

EXPOSE 300

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install && npm cache clean --force

COPY . .

CMD [ "/sbin/tini","--","node","./bin/www" ]