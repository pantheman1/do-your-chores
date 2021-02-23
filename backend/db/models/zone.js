'use strict';
module.exports = (sequelize, DataTypes) => {
  const zone = sequelize.define('Zone', {
    name: DataTypes.STRING,
    location: DataTypes.STRING
  }, {});
  Zone.associate = function (models) {
    Zone.hasOne(models.Squad, { foreignKey: 'zone_id' });
    Zone.hasMany(models.Chore, { foreignKey: 'zone_id' });
  };
  return zone;
};