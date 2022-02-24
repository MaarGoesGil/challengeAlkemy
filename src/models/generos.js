const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  return sequelize.define('Generos', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    Nombre: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'El nombre del género no puede estar vacío'
        },
        len: {
          args: [3, 50],
          msg: 'El nombre del género debe tener entre 3 y 50 caracteres'
        }
      }
    },
    Imagen: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
}
