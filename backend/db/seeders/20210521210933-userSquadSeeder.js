'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserSquads', [
      {
        squadId: 1,
        userId: 2
      },
      {
        squadId: 1,
        userId: 1
      },
      {
        squadId: 1,
        userId: 3
      },
      {
        squadId: 1,
        userId: 4
      },
      {
        squadId: 2,
        userId: 1
      },
      {
        squadId: 2,
        userId: 2
      },
      {
        squadId: 2,
        userId: 3
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserSquads', null, {});
  }
};
