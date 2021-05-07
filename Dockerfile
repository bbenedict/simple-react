FROM node:12-alpine
WORKDIR /simple-react
COPY . .
RUN npm install
CMD ["npm", "run", "docker"]
