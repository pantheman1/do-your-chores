'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserSquad = sequelize.define('UserSquad', {
    squadId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  UserSquad.associate = function (models) {
    UserSquad.belongsTo(models.User, { foreignKey: 'userId' })
    UserSquad.belongsTo(models.Squad, { foreignKey: 'squadId' })
  };
  return UserSquad;
};