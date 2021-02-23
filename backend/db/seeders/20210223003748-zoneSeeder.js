'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Zones', [
      {
        name: "Kitchen",
      },
      {
        name: "Upstairs"
      },
      {
        name: "Boys' Room"
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Zones', null, {});
  }
};
