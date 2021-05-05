'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Demo',
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        name: 'Waaaaaahhh',
        email: faker.internet.email(),
        username: 'Sad-Face',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        name: 'Billy',
        email: faker.internet.email(),
        username: 'Tired123',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        name: "Johnny",
        email: faker.internet.email(),
        username: 'John-John',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};