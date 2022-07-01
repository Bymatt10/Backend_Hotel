const Sequelize = require('sequelize')
const Connection = require('./connection')

const connection = new Connection()
const Rol = connection.sequelize.define(
  'Rol',
  {
    idrRol: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombreRol: Sequelize.STRING,
    estado: Sequelize.BOOLEAN,
    reservas: Sequelize.BOOLEAN,
    check_in: Sequelize.BOOLEAN,
    check_out: Sequelize.BOOLEAN,
    habitaciones: Sequelize.BOOLEAN,
    usuarios: Sequelize.BOOLEAN,
    datos: Sequelize.BOOLEAN,
    cuentas: Sequelize.BOOLEAN,
    aprobarclientes: Sequelize.BOOLEAN,
    listaclientes: Sequelize.BOOLEAN,
    editarhabitacion: Sequelize.BOOLEAN,
    vista1: Sequelize.BOOLEAN,
    vista2: Sequelize.BOOLEAN,
    vista3: Sequelize.BOOLEAN,
    vista4: Sequelize.BOOLEAN,
    vista5: Sequelize.BOOLEAN
  },
  {
    tableName: 'rol',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)

module.exports = Rol
