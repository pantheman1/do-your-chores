'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Zones', [
      {
        location: "Kitchen",
        squadId: 1,
      },
      {
        location: "Upstairs",
        squadId: 1,
      },
      {
        location: "Boys' Room",
        squadId: 1,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Zones', null, {});
  }
};
