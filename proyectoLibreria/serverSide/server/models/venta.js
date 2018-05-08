"use strict"
module.exports = (sequelize, DataTypes) => {
  var venta = sequelize.define(
    "venta",
    {
      total: DataTypes.INTEGER
    },
    { tableName: "ventas", timestamps: false }
  )
  venta.associate = function(models) {
    venta.hasMany(models.detalleVenta, {
      foreignKey: "ventaId",
      as: "detalleVentas"
    })
  }
  return venta
}
