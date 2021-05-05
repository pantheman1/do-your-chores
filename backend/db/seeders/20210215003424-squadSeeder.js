'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Squads', [
      {
        name: 'Super Cleaners',
      },
      {
        name: 'Sad-Sack Cleaners',
      },
      {
        name: "The Boys",
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Squads', null, {});
  }
};
