const { Router } = require("express");
const ParcelController = require("../controllers/ParcelController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const validate = require("../middlewares/validate");
const { body } = require("express-validator");

const routes = Router();
const controller = new ParcelController();

// Rotas
routes.post(
  "/",
  body("cep", "cep é obrigatório").notEmpty(),
  body("status", "status é obrigatório").optional(),
  body("codigorastreio", "codigorastreio é obrigatório").optional(),
  body("tipoEntrega", "tipoEntrega é obrigatório").optional(),
  // body("responsibleId", "responsibleId é obrigatório").notEmpty(),
  validate,
  controller.create
);
routes.get("/", ensureAuthenticated, controller.list);
routes.put(
  "/",
  body("id", "id é obrigatório").notEmpty(),
  body("cep", "cep é obrigatório").optional(),
  body("status", "status é obrigatório").optional(),
  body("codigorastreio", "codigorastreio é obrigatório").optional(),
  body("tipoEntrega", "tipoEntrega é obrigatório").optional(),
  // body("responsibleId", "responsibleId é obrigatório").notEmpty(),
  validate,
  ensureAuthenticated,
  controller.update
);
routes.delete("/:id", ensureAuthenticated, controller.delete);
routes.get("/:id", ensureAuthenticated, controller.findById);

// Exporta
module.exports = routes;
