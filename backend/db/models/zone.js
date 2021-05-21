'use strict';
module.exports = (sequelize, DataTypes) => {
  const Zone = sequelize.define('Zone', {
    location: DataTypes.STRING,
    squadId: DataTypes.INTEGER,
  }, {});
  Zone.associate = function (models) {
    Zone.belongsTo(models.Squad, { foreignKey: 'squad_id' });
    Zone.hasMany(models.Chore, { foreignKey: 'zone_id' });
  };

  return Zone;
};