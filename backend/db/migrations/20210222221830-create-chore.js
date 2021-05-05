'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Chores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      dueDate: {
        type: Sequelize.DATE,
        get: function () {
          return moment(this.getDataValue('due_date')).format('MM/DD/YYYY hh:mm')
        },
      },
      description: {
        type: Sequelize.TEXT
      },
      estimatedTime: {
        type: Sequelize.INTEGER
      },
      isComplete: {
        type: Sequelize.BOOLEAN
      },
      zoneId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Zones" }
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Users" }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Chores');
  }
};