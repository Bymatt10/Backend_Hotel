const Rol = require('../models/rol.model')

module.exports = class paisController {
  async list (req, res, next) {
    const list = await Rol.findAll()
    res.send(list)
  }

  async get (req, res, next) {
    const id = req.params.id
    const rol = await Rol.findByPk(id)
    res.send(rol)
  }

  async update (req, res, next) {
    const id = req.params.id
    const {
      nombreRol,
      estado,
      reservas,
      check_in,
      check_out,
      habitaciones,
      usuarios,
      datos,
      cuentas,
      aprobarclientes,
      listaclientes,
      editarhabitacion,
      vista1,
       vista2,
       vista3,
       vista4,
       vista5
     } = req.body
    if (!id) return res.status(400).send({ message: 'id es requerido' })
    if (!nombreRol) return res.status(400).send({ message: 'Nombre del rol es requerido' })
   
    const rol = await Rol.update(
      {
        nombreRol,
        estado,
        nombreRol,
        estado,
        reservas,
        check_in,
        check_out,
        habitaciones,
        usuarios,
        datos,
        cuentas,
        aprobarclientes,
        listaclientes,
        editarhabitacion,
        vista1,
       vista2,
       vista3,
       vista4,
       vista5
      },
      {
        where: {
          idrRol: id
        }
      }
    )
    res.status(204).send(rol)
  }

  async create (req, res, next) {
    const {
       nombreRol,
       estado,
       reservas,
       check_in,
       check_out,
       habitaciones,
       usuarios,
       datos,
       cuentas,
       aprobarclientes,
       listaclientes,
       editarhabitacion,
       vista1,
       vista2,
       vista3,
       vista4,
       vista5
      } = req.body
    if (!nombreRol) return res.status(400).send({ message: 'Nombre del rol es requerido' })
    if (!estado) return res.status(400).send({ message: 'Estado es requerido' })
    const rol = await Rol.create({
      nombreRol,
      estado,
      reservas,
      check_in,
      check_out,
      habitaciones,
      usuarios,
      datos,
      cuentas,
      aprobarclientes,
      listaclientes,
      editarhabitacion,
      vista1,
       vista2,
       vista3,
       vista4,
       vista5
    })
    res.status(201).send(rol)
  }

  async delete (req, res, next) {
    const id = req.params.id

    const destroyResult = await Rol.destroy({
      where: {
        idrRol: id
      }
    })
    if (destroyResult) {
      return res.sendStatus(204)
    }

    res.status(500)
  }
}
