"use strict"
module.exports = (sequelize, DataTypes) => {
  var detalleVenta = sequelize.define(
    "detalleVenta",
    {
      ventaId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      detalleId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    { tableName: "detalleVentas", timestamps: false }
  )
  detalleVenta.associate = function(models) {
    detalleVenta.belongsTo(models.venta, {
      foreignKey: "ventaId",
      onDelete: "CASCADE"
    })
    detalleVenta.belongsTo(models.detalle, {
      foreignKey: "detalleId",
      onDelete: "CASCADE"
    })
  }
  return detalleVenta
}
