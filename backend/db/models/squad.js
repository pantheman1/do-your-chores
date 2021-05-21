'use strict';
module.exports = (sequelize, DataTypes) => {
  const Squad = sequelize.define('Squad', {
    name: DataTypes.STRING,
  }, {});
  Squad.associate = function (models) {
    const columnMappingUserSquad = {
      through: 'UserSquad',
      otherKey: 'userId',
      foreignKey: 'squadId',
    }
    Squad.belongsToMany(models.User, columnMappingUserSquad);

    const columnMappingOwnerSquad = {
      through: 'UserSquad',
      otherKey: 'userId',
      foreignKey: 'squadId',
    }
    Squad.belongsToMany(models.User, columnMappingOwnerSquad);

    Squad.hasMany(models.UserSquad, { foreignKey: "squadId" });
    Squad.hasMany(models.Zone, { foreignKey: "squadId" });
  };
  return Squad;
};