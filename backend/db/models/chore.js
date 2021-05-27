'use strict';
module.exports = (sequelize, DataTypes) => {
  const Chore = sequelize.define('Chore', {
    name: DataTypes.STRING,
    dueDate: DataTypes.DATE,
    description: DataTypes.TEXT,
    estimated_time: DataTypes.INTEGER,
    isComplete: DataTypes.BOOLEAN,
    zoneId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Chore.associate = function (models) {
    Chore.belongsTo(models.User, { foreignKey: "userId" });
    Chore.belongsTo(models.Zone, { foreignKey: "zoneId" });
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