const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  return sequelize.define('Usuarios', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        len: [2, 50]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        len: [2, 50]
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        notEmpty: true
      }
    },
    isVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  })
}
