const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  return sequelize.define('Series', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false
    },
    titulo: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        len: [2, 100]
      }
    },
    fechaDeCreacion: {
      type: DataTypes.DATE(6),
      allowNull: false
    },
    calificacion: {
      type: DataTypes.ENUM('1', '2', '3', '4', '5'),
      allowNull: false
    }
  })
}
