const Sequelize = require('sequelize')
const Connection = require('./connection')
const connection = new Connection()
const Caja = connection.sequelize.define(
  'Caja',
  {
    idCaja: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    idusuario: Sequelize.STRING,
    nombre_caja: Sequelize.STRING,
    descripcion: Sequelize.STRING,
    fecha_apertura: Sequelize.STRING,
    cantidad_inicial: Sequelize.STRING,
    cantidad_cierre: Sequelize.STRING,
    monto: Sequelize.FLOAT,
    ubicacion: Sequelize.STRING,
    estado: Sequelize.BOOLEAN

  },
  {
    tableName: 'caja',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)
module.exports = Caja
