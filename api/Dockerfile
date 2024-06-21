# FROM node:latest 

# WORKDIR /app
# ADD . /app   
# RUN npm install
# CMD node index.js

# optimized one this would improve things dramaticaly this is caching
FROM node:10.16.1-alpine

WORKDIR /app
# for optimizing purposes we add on only the files or folders we need
# so we add package.json only for now
ADD package*.json ./   
RUN npm install
# after npm install we add the source code 
ADD . .
CMD node index.js