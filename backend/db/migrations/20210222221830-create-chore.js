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
      due_date: {
        type: Sequelize.DATE,
        get: function () {
          return moment(this.getDataValue('due_date')).format('MM/DD/YYYY hh:mm')
        },
      },
      description: {
        type: Sequelize.TEXT
      },
      estimated_time: {
        type: Sequelize.INTEGER
      },
      isComplete: {
        type: Sequelize.BOOLEAN
      },
      zone_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Zones" }
      },
      user_id: {
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