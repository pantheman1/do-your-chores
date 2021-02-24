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
  //create component for zone which will house the chore component

  //Basic chore view
  //returns the user/owner --name, 
  //returns chore --name, isComplete


  //Detailed Chore View
  //returns the user/owner --name
  //returns chore --name, isComplete, due_date, description, estimated_time
  //returns zone --location
  //returns squad --name
  return Chore;
};