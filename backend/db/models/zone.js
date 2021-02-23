'use strict';
module.exports = (sequelize, DataTypes) => {
  const Zone = sequelize.define('Zone', {
    location: DataTypes.STRING,
  }, {});
  Zone.associate = function (models) {
    Zone.hasOne(models.Squad, { foreignKey: 'zone_id' });
    Zone.hasMany(models.Chore, { foreignKey: 'zone_id' });
  };
  return Zone;
};