'use strict';
module.exports = (sequelize, DataTypes) => {
  const OwnerSquad = sequelize.define('OwnerSquad', {
    squadId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  OwnerSquad.associate = function (models) {
    OwnerSquad.belongsTo(models.User, { foreignKey: 'userId' })
    OwnerSquad.belongsTo(models.Squad, { foreignKey: 'squadId' })
  };
  return OwnerSquad;
};