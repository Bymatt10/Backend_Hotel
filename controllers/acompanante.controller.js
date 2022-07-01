const acompanante = require('../models/acompanante.model')

module.exports = class AcompananteController {
  async list (req, res, next) {
    const list = await acompanante.findAll()
    res.send(list)
  }

  // eslint-disable-next-line require-jsdoc
  async get (req, res, next) {
    const id = req.params.id
    const acompanante = await Acompanante.findAll(
      {
        where: {
          idreserva: id
        }
      }
    )
    res.send(acompanante)
  }

  async create (req, res,next) {
    const {
      Nombre,
      Edad,
      Identificacion,
      Telefono,    
      idreserva
    } = req.body
    // eslint-disable-next-line max-len
   
    // eslint-disable-next-line max-len
    if (!idreserva) return res.status(400).send({ message: 'La Reserva  es requerido' })
    const acompanant = await acompanante.create( {
      Nombre,
      Edad,
      Identificacion,
      Telefono,
      idreserva
    })
    res.status(201).send(acompanant)
  }
}
