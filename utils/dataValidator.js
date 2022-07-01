/**
 * [Validates incoming Data based on Models structure]
 */

const Joi = require("joi");

// Login lead
exports.createReserveValidate = Joi.object({
  fechaEntrada: Joi.date().required(),
  fechaSalida: Joi.date().required(),
  estado: Joi.number().required(),
  cantPersonas: Joi.number().required(),
  idservicio: Joi.number().required(),
  idhabitacion: Joi.number().required(),
  idusuario: Joi.number().required(),
  idcategoriaHab: Joi.number().required(),
});

// Login lead
exports.updateReserve = Joi.object({
  fechaEntrada: Joi.date().required(),
  fechaSalida: Joi.date().required(),
  estado: Joi.number().required(),
  cantPersonas: Joi.number().required(),
  idservicio: Joi.number().required(),
  idhabitacion: Joi.number().required(),
  idusuario: Joi.number().required(),
  idcategoriaHab: Joi.number().required(),
});

