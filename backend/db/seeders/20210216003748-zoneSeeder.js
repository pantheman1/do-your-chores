'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Zones', [
      {
        location: "Kitchen",
        squad_id: 1,
      },
      {
        location: "Upstairs",
        squad_id: 1,
      },
      {
        location: "Boys' Room",
        squad_id: 1,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Zones', null, {});
  }
};
