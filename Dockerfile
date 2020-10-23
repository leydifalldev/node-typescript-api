FROM node:12
WORKDIR /usr/src/app
RUN apt-get update && apt-get install -y netcat
RUN node -v
RUN rm -rf node_modules
COPY package.json .
COPY nodemon.json .
COPY ./src ./src
COPY ./start.sh .
RUN chmod +x /usr/src/app/start.sh
RUN yarn add node-pre-gyp
RUN yarn global add typescript
RUN yarn global add nodemon
RUN yarn global add ts-node
RUN yarn
EXPOSE 5000
CMD [ "nodemon" ]