const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  return sequelize.define('Personajes', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'Imagen del personaje'
    },
    nombre: {
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
    edad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: 'Edad del personaje'
    },
    peso: {
      type: DataTypes.REAL,
      allowNull: false,
      comment: 'Peso del personaje'
    },
    historia: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        len: [10, 1000]
      }
    }
  })
}
