'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Chores', [
      {
        name: "Dishes",
        due_date: "",
        description: "Do them all.",
        estimated_time: 30,
        isComplete: false,
        zone_id: 1,
        user_id: 1,
      },
      {
        name: "Sweep floor",
        description: "Sweep it good.",
        estimated_time: 10,
        zone_id: 1,
        user_id: 1,
      },
      {
        name: "Wipe table",
        zone_id: 1,
        user_id: 1,
      },
      {
        name: "Vacuum",
        due_date: "",
        description: "Don't forget the stairs",
        estimated_time: 15,
        isComplete: false,
        zone_id: 2,
        user_id: 2,
      },
      {
        name: "Make beds",
        due_date: "",
        description: "Make those sheets nice and straight",
        estimated_time: 5,
        isComplete: false,
        zone_id: 3,
        user_id: 3,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Chores', null, {});
  }
};
