const { Sequelize } = require('sequelize')
require('dotenv').config()
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env

// Importo los modelos
const Models = require('../models/models')

// Declaro la DB
const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    { logging: false, native: false }
)

// Creamos la conexión de los modelos a la DB
Models.forEach(model => model(sequelize))

// Relaciones
const { Personajes, Series, Generos } = sequelize.models

Personajes.belongsToMany(Series, { through: 'PersonajesSeries' })
Series.belongsToMany(Personajes, { through: 'PersonajesSeries' })
Generos.hasMany(Series)

module.exports = {
  ...sequelize.models,
  conexion: sequelize
}
