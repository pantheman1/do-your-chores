FROM node:10.16-alpine
COPY . ./frontend
WORKDIR /frontend
EXPOSE 8000
RUN npm install
CMD ["npm", "start"]

