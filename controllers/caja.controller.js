const Caja = require('../models/caja.model')

module.exports = class cajaController {
  async list (req, res, next) {
    const list = await Caja.findAll()
    res.send(list)
  }

  async get (req, res, next) {
    const id = req.params.id
    const caja = await Caja.findAll(
      {
        where: {
          idCaja: id
        }
      }
    )
    res.send(caja)
  }

  async get2 (req, res, next) {
    const id = req.params.id
    const caja = await Caja.findAll(
      {
        where: {
          idusuario: id
        }
      }
    )
    res.send(caja)
  }

  async update (req, res, next) {
    const id = req.params.id
    const {
      // eslint-disable-next-line camelcase
      idusuario,
      // eslint-disable-next-line camelcase
      nombre_caja,
      descripcion,
      // eslint-disable-next-line camelcase
      fecha_apertura,
      // eslint-disable-next-line camelcase
      cantidad_inicial,
      // eslint-disable-next-line camelcase
      cantidad_cierre,
      monto,
      ubicacion,
      estado
    } = req.body
    // eslint-disable-next-line max-len
    
    // eslint-disable-next-line camelcase,max-len
  
    const caja = await Caja.update(
      {
        // eslint-disable-next-line camelcase
        idusuario,
        // eslint-disable-next-line camelcase
        nombre_caja,
        descripcion,
        // eslint-disable-next-line camelcase
        fecha_apertura,
        // eslint-disable-next-line camelcase
        cantidad_inicial,
        // eslint-disable-next-line camelcase
        cantidad_cierre,
        monto,
        ubicacion,
        estado
      },
      {
        where: {
          idCaja: id
        }
      }
    )
    res.status(204).send(caja)
  }

  async create (req, res, next) {
    const {
      // eslint-disable-next-line camelcase
      idusuario,
      // eslint-disable-next-line camelcase
      nombre_caja,
      descripcion,
      // eslint-disable-next-line camelcase
      fecha_apertura,
      // eslint-disable-next-line camelcase
      cantidad_inicial,
      // eslint-disable-next-line camelcase
      cantidad_cierre,
      monto,
      ubicacion,
      estado
    } = req.body
    // eslint-disable-next-line max-len
    if (!idusuario) return res.status(400).send({ message: 'El usuario es requerido' })
    // eslint-disable-next-line camelcase,max-len
    if (!nombre_caja) return res.status(400).send({ message: 'El nombre es requerido' })
    // eslint-disable-next-line max-len,camelcase
    if (!fecha_apertura) return res.status(400).send({ message: 'La fecha es requeridad' })
    // eslint-disable-next-line max-len,camelcase
    if (!cantidad_inicial) return res.status(400).send({ message: 'La Cantidad Inicial es requeridad' })
    // eslint-disable-next-line max-len,camelcase
    if (!cantidad_cierre) return res.status(400).send({ message: 'La Cantidad de cierre  es requeridad' })
    // eslint-disable-next-line max-len
    if (!monto) return res.status(400).send({ message: 'EL monto es requeridad' })
    // eslint-disable-next-line max-len
    if (!ubicacion) return res.status(400).send({ message: 'La Ubicacion es requeridad' })
    const caja = await Caja.create({
      // eslint-disable-next-line camelcase
      idusuario,
      // eslint-disable-next-line camelcase
      nombre_caja,
      descripcion,
      // eslint-disable-next-line camelcase
      fecha_apertura,
      // eslint-disable-next-line camelcase
      cantidad_inicial,
      // eslint-disable-next-line camelcase
      cantidad_cierre,
      monto,
      ubicacion,
      estado
    })
    res.status(201).send(caja)
  }
}
