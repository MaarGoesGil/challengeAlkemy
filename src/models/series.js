const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  return sequelize.define('Series', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    Imagen: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Titulo: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        len: [2, 100]
      }
    },
    FechaDeCreacion: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    Calificacion: {
      type: DataTypes.ENUM('1', '2', '3', '4', '5'),
      allowNull: false
    }
  })
}
