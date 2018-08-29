'use strict';
module.exports = (sequelize, DataTypes) => {
  const Hobbies = sequelize.define('Hobbies', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Hobbies.associate = function(models) {
    // associations can be defined here
  };
  return Hobbies;
};