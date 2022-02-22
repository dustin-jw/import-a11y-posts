FROM node:16

WORKDIR /var/www/html

COPY . /var/www/html

RUN npm ci
RUN npm run clean
RUN npm run build
