FROM postgres:13.2
COPY . /db
WORKDIR /db
RUN npm install -g sequelize-cli
RUN sequelize-cli db:create
RUN sequelize-cli db:migrate
RUN sequelize-cli db:seed:all