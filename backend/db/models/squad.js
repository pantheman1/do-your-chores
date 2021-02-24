'use strict';
module.exports = (sequelize, DataTypes) => {
  const Squad = sequelize.define('Squad', {
    name: DataTypes.STRING,
    // zone_id: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {});
  Squad.associate = function (models) {
    Squad.hasMany(models.User, { foreignKey: "squad_id" });
    Squad.hasMany(models.Zone, { foreignKey: "squad_id" });
  };
  return Squad;
};