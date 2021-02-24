'use strict';
module.exports = (sequelize, DataTypes) => {
  const Zone = sequelize.define('Zone', {
    location: DataTypes.STRING,
  }, {});
  Zone.associate = function (models) {
    Zone.belongsTo(models.Squad, { foreignKey: 'squad_id' });
    Zone.hasMany(models.Chore, { foreignKey: 'zone_id' });
  };
  Zone.findZone = async function (id) {
    return await Zone.findByPk(id);
  }
  return Zone;
};