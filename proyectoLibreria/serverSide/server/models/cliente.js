"use strict"
module.exports = (sequelize, DataTypes) => {
  var cliente = sequelize.define(
    "cliente",
    {
      nombre: DataTypes.STRING,
      apellido: DataTypes.STRING,
      email: DataTypes.STRING
    },
    { tableName: "clientes", timestamps: false }
  )
  cliente.associate = function(models) {
    cliente.belongsTo(models.direccion)
    //cliente.hasOne(models.direccion, { as: "direcciones" })
    //cliente.hasMany(models.Venta, { as: "ventas", foreignKey: "ventaId" })
  }
  return cliente
}
