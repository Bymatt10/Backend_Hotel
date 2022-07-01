const express = require('express')
const router = express.Router()

const Caja = require('../controllers/caja.controller');
const caja = new Caja()

/* Get categories list */
router.get('/', caja.list)
/* Get category by id */
router.get('/:id', caja.get)
router.get('/get/:id', caja.get2)
/* Update category */
router.put('/update/:id', caja.update)
/* Create category */
router.post('/create', caja.create)

module.exports = router
