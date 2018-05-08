"use strict"
module.exports = (sequelize, DataTypes) => {
  var detalle = sequelize.define(
    "detalle",
    {
      item: DataTypes.STRING,
      cantidad: DataTypes.INTEGER,
      precio: DataTypes.INTEGER
    },
    { tableName: "detalles", timestamps: false }
  )
  detalle.associate = function(models) {
    detalle.hasMany(models.detalleVenta, {
      foreignKey: "detalleId",
      as: "detalleVentas"
    })
    detalle.belongsTo(models.libro, {
      foreignKey: "libroId",
      onDelete: "CASCADE"
    })
  }
  return detalle
}
