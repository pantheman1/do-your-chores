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
        favorite_thing_to_clean: 'Toilets',
        role: 'Super-grunt',
        about_me: 'I\'m a crazy cleaner! I clean all day long for fun.',
        squad_id: 1,
        hashedPassword: bcrypt.hashSync('password'),
      },
      {
        name: 'Waaaaaahhh',
        email: faker.internet.email(),
        username: 'Sad-Face',
        favorite_thing_to_clean: 'Nothing',
        role: 'Wine',
        about_me: 'I just don\'t like to clean. That\'s the long and the short of it.',
        squad_id: 2,
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        name: "Johnny",
        email: faker.internet.email(),
        username: 'John-John',
        favorite_thing_to_clean: 'The kitchen',
        role: 'Clean like a dream',
        about_me: "I'm a boy, and I clean.",
        squad_id: 3,
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};