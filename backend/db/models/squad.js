'use strict';
module.exports = (sequelize, DataTypes) => {
  const Squad = sequelize.define('Squad', {
    name: DataTypes.STRING,
    // zone_id: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {});
  Squad.associate = function (models) {
    const columnMapping = {
      through: 'UserSquad',
      otherKey: 'userId',
      foreignKey: 'squadId',
    }
    Squad.belongsToMany(models.User, columnMapping);
    Squad.hasMany(models.UserSquad, { foreignKey: "squadId" });
    Squad.hasMany(models.Zone, { foreignKey: "squadId" });
  };
  return Squad;
};