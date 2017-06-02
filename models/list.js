'use strict';
module.exports = function(sequelize, DataTypes) {
  var List = sequelize.define('List', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    type: DataTypes.STRING,
    icon: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return List;
};