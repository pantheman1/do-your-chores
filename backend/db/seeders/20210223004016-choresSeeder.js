'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Chores', [
      {
        name: "Dishes",
        dueDate: "02/28/2021 08:00",
        description: "Do them all.",
        estimatedTime: 30,
        isComplete: false,
        zoneId: 1,
        userId: 1,
      },
      {
        name: "Sweep floor",
        dueDate: "02/24/2021 18:00",
        description: "Sweep it good.",
        estimatedTime: 10,
        isComplete: false,
        zoneId: 1,
        userId: 1,
      },
      {
        name: "Dust light fixtures",
        dueDate: "02/24/2021 08:40",
        description: "Dust it good.",
        estimatedTime: 10,
        isComplete: false,
        zoneId: 1,
        userId: 2,
      },
      {
        name: "Wipe table",
        zoneId: 3,
        isComplete: false,
        userId: 1,
      },
      {
        name: "Clean out fridge",
        zoneId: 1,
        userId: 3,
        isComplete: false,
      },
      {
        name: "Mop",
        zoneId: 2,
        userId: 1,
        isComplete: false,
        isComplete: false,
      },
      {
        name: "Clean toaster",
        zoneId: 1,
        userId: 1,
        isComplete: false,
      },
      {
        name: "Vacuum",
        description: "Don't forget the stairs",
        estimatedTime: 15,
        isComplete: false,
        zoneId: 2,
        userId: 2,
      },
      {
        name: "Make beds",
        description: "Make those sheets nice and straight",
        estimatedTime: 5,
        isComplete: false,
        zoneId: 3,
        userId: 3,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Chores', null, {});
  }
};
