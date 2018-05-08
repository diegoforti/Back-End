"use strict"
module.exports = (sequelize, DataTypes) => {
  var libro = sequelize.define(
    "libro",
    {
      titulo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      resumen: {
        type: DataTypes.STRING,
        allowNull: false
      },
      autor: {
        type: DataTypes.STRING,
        allowNull: false
      },
      precio: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false
      },
      editorial: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { tableName: "libros", timestamps: false }
  )

  libro.associate = function(models) {
    libro.hasMany(models.detalle, { as: "detalles", foreignKey: "libroId" })
  }

  return libro
}
