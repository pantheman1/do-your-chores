'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Zones', [
      {
        location: "Kitchen",
      },
      {
        location: "Upstairs"
      },
      {
        location: "Boys' Room"
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Zones', null, {});
  }
};
