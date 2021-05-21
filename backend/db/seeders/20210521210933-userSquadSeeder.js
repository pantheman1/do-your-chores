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
        userId: 3
      },
      {
        squadId: 1,
        userId: 4
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserSquads', null, {});
  }
};
