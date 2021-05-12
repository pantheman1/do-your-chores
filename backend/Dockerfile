FROM node:10.16-alpine
COPY . ./backend
WORKDIR /backend
EXPOSE 5000
RUN npm install
CMD ["npm", "start"]
