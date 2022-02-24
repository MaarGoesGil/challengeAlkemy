const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  return sequelize.define('Personajes', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    Imagen: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Imagen del personaje'
    },
    Nombre: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'El nombre del personaje no puede estar vacío'
        },
        len: {
          args: [3, 50],
          msg: 'El nombre del personaje debe tener entre 3 y 50 caracteres'
        }
      }
    },
    Edad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'Edad del personaje'
    },
    Peso: {
      type: DataTypes.REAL,
      allowNull: false,
      comment: 'Peso del personaje'
    },
    Historia: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        len: [10, 1000]
      }
    }
  })
}
