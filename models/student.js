'use strict';
module.exports = (sequelize, DataTypes) => {
  var student = sequelize.define('student', {
    userID: DataTypes.INTEGER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNumber: DataTypes.BIGINT,
    address: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return student;
};