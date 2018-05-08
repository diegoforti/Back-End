"use strict"
module.exports = (sequelize, DataTypes) => {
  var direccion = sequelize.define(
    "direccion",
    {
      calle: DataTypes.STRING,
      numero: DataTypes.INTEGER,
      ciudad: DataTypes.STRING,
      pais: DataTypes.STRING
    },
    { tableName: "direcciones", timestamps: false }
  )
  direccion.associate = function(models) {}
  return direccion
}
