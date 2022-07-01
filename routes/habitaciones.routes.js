const express = require('express')
const router = express.Router()

const Habitacion = require('../controllers/habitaciones.controller')
const habitacion = new Habitacion()

/* Get categories list */
router.get('/', habitacion.list)
router.get('/list1', habitacion.list1)
router.get('/list2', habitacion.list2)
router.get('/list3', habitacion.list3)

router.get('/obtener', habitacion.obtenerTodos)
/* Get category by id */
router.get('/:id', habitacion.get)
/* Update category */
router.put('/update/:id', habitacion.update)
/* Create category */
router.post('/create', habitacion.create)
/* Delete category */
router.put('/cambiarEstado/:id', habitacion.delete)

module.exports = router