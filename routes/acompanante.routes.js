const express = require('express')
const router = express.Router()

const Acompanante = require('../controllers/acompanante.controller')
const acompanante = new Acompanante()

/* Get categories list */
router.get('/', acompanante.list)
/* Get category by id */
router.get('/:id', acompanante.get)
/* Create category */
router.post('/create', acompanante.create)
/* Delete category */

module.exports = router
