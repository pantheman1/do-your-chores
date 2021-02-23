'use strict';
module.exports = (sequelize, DataTypes) => {
  const Chore = sequelize.define('Chore', {
    name: DataTypes.STRING,
    due_date: DataTypes.DATE,
    description: DataTypes.TEXT,
    estimated_time: DataTypes.FLOAT,
    isComplete: DataTypes.BOOLEAN,
    zone_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  Chore.associate = function (models) {
    Chore.belongsTo(models.User, { foreignKey: "user_id" });
    Chore.belongsTo(models.Zone, { foreignKey: "zone_id" });
  };
  return Chore;
};