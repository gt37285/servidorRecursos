FROM node:18-alpine
WORKDIR /usr/app
COPY ./dist ./dist
COPY ./package.json .
RUN npm i --only=prod
CMD ["npm", "start"]