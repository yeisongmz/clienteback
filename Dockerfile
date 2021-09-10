# syntax=docker/dockerfile:1
FROM node:14-alpine
EXPOSE 5000
WORKDIR /app
ADD package.json /app/
RUN npm install 
CMD ["node", "index.js"]
ADD . /app 