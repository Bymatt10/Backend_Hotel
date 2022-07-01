const Reserva = require("../models/reservas.model");
const ReservaEstado = require("../models/reservasEstado.model");

const {
  createReserveValidate,
  updateReserve,
} = require("../utils/dataValidator");

// Errors
const { NotFound, Conflict } = require("../utils/sequelizeError");

// async Handler
const asyncHandler = require("../middlewares/asyncHandler");

exports.getAllReserve = asyncHandler(async (req, res) => {
  const dataList = await Reserva.findAll();

  res.status(200).json({
    success: true,
    dataList,
  });
});

exports.getReserveById = asyncHandler(async (req, res) => {
  const data = await Reserva.findAll({ where: { idusuario: req.params.id } });

  res.status(200).json({
    success: true,
    reserve: data,
  });
});

exports.changeStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id) throw new NotFound("Error need id");
  if (!req.body.status) throw new NotFound("Need status");

  await ReservaEstado.update(
    {
      estado: req.body.status,
    },
    {
      where: {
        idreserva: id,
      },
    }
  );

  res.status(200).json({
    success: true,
  });
});

exports.update = asyncHandler(async (req, res) => {
  await updateReserve.validateAsync(req.body);

  const fechaInicio = new Date(req.body.fechaEntrada).getTime();
  const fechaFin = new Date(req.body.fechaSalida).getTime();
  var diff = fechaFin - fechaInicio;
  const cantDay = diff / (1000 * 60 * 60 * 24);
  console.log(cantDay);

  const reserva = await Reserva.findOne({
    where: {
      idreserva: req.params.id,
    },
  });

  reserva.fechaEntrada = req.body.fechaEntrada;
  reserva.fechaSalida = req.body.fechaSalida;
  reserva.estado = req.body.estado;
  reserva.cantPersonas = req.body.cantPersonas;
  reserva.idservicio = req.body.idservicio;
  reserva.idhabitacion = req.body.idhabitacion;
  reserva.idusuario = req.body.idusuario;
  reserva.idcategoriaHab = req.body.idcategoriaHab;
  reserva.dias = cantDay;
  await reserva.save();

  res.status(200).json({
    success: true,
    reserva,
  });
});

exports.createReserve = asyncHandler(async (req, res) => {
  await createReserveValidate.validateAsync(req.body);

  const fechaInicio = new Date(req.body.fechaEntrada).getTime();
  const fechaFin = new Date(req.body.fechaSalida).getTime();
  var diff = fechaFin - fechaInicio;
  const cantDay = diff / (1000 * 60 * 60 * 24);

  const reserva = await Reserva.create({
    fechaEntrada: req.body.fechaEntrada,
    fechaSalida: req.body.fechaSalida,
    estado: req.body.estado,
    cantPersonas: req.body.cantPersonas,
    idservicio: req.body.idservicio,
    idhabitacion: req.body.idhabitacion,
    idusuario: req.body.idusuario,
    idcategoriaHab: req.body.idcategoriaHab,
    dias: cantDay,
  });

  res.status(200).json({
    success: true,
    reserva,
  });
});

exports.deleteReserver = asyncHandler(async (req, res) => {

  const reserve = await Reserva.findOne({
    where: { idreserva: req.params.id },
  });
  reserve.estado = req.body.estado;
  await reserve.save();

  res.status(200).json({
    success: true,
    reserve,
  });
});