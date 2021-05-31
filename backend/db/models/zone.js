'use strict';
module.exports = (sequelize, DataTypes) => {
  const Zone = sequelize.define('Zone', {
    location: DataTypes.STRING,
    squadId: DataTypes.INTEGER,
  }, {});
  Zone.associate = function (models) {
    Zone.belongsTo(models.Squad, { foreignKey: 'squadId' });
    Zone.hasMany(models.Chore, { foreignKey: 'zoneId' });
  };

  return Zone;
};