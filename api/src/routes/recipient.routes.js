const { Router } = require("express");
const RecipientController = require("../controllers/RecipientController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const validate = require("../middlewares/validate");
const { body } = require("express-validator");

const routes = Router();
const controller = new RecipientController();

// Rotas
routes.post(
  "/",
  ensureAuthenticated,
  body("name", "name é obrigatório").notEmpty(),
  validate,
  controller.create
);
routes.get("/", ensureAuthenticated, controller.list);
routes.put(
  "/",
  ensureAuthenticated,
  body("id", "id é obrigatório").notEmpty(),
  body("name", "name é obrigatório").notEmpty(),
  validate,
  controller.update
);
routes.delete("/:id", ensureAuthenticated, controller.delete);
// routes.get("/:id", ensureAuthenticated, controller.findById);

// Exporta
module.exports = routes;
