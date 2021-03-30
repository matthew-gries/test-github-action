FROM node

WORKDIR /server
COPY . /server/

RUN yarn install --force --production=false --check-files

EXPOSE 8000