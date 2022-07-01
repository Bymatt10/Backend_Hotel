const Sequelize = require('sequelize')
const Connection = require('./connection')

const connection = new Connection()
const acompanante = connection.sequelize.define(
  'acompañantes',
  {
    idAcompanante: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Nombre: Sequelize.STRING,
    Edad: Sequelize.INTEGER,
    Identificacion: Sequelize.STRING,
    Telefono: Sequelize.INTEGER,
    idreserva: Sequelize.INTEGER
  },
  {
    tableName: 'acompañantes',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
)

module.exports = acompanante
