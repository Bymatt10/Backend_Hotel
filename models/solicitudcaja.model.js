const Sequelize = require('sequelize')
const Connection = require('./connection')
const connection = new Connection()
const Caja = connection.sequelize.define(
  'Caja',
  {
    idsolicitud: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idusuario: Sequelize.INTEGER,
    idCaja: Sequelize.INTEGER,
    fecha_apertura: Sequelize.STRING,
    descripcion: Sequelize.STRING,
    descripcion: Sequelize.STRING,
    cantidad_inicial: Sequelize.STRING,    
    estado: Sequelize.BOOLEAN

  },
  {
    tableName: 'solicitudcaja',
  }
)
module.exports = Caja
