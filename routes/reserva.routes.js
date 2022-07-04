const express = require("express");
const router = express.Router();

// const Reserva = require('../controllers/reserva.controller')
// const reserva = new Reserva()

const {
  getAllReserve,
  getReserveById,
  changeStatus,
  update,
  createReserve,
  deleteReserver,
  listReserveById,
  deleteReserve,
} = require("../controllers/reserva.controller");

/* Get categories list */
router.get("/", getAllReserve);
/* Get category by id */
router.get("/:id", getReserveById);
/* Update category */
router.put("/update/:id", update);

router.put("/cambioEstado/:id", changeStatus);

// /* Create category */
router.post("/", createReserve);
// /* Delete category */
router.delete("/delete/:id", deleteReserver);

/* A route that is used to get a single reservation by id. */
router.get("/one/:id", listReserveById);

router.delete("/", deleteReserve);

module.exports = router;
