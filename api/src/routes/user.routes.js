const { Router } = require("express");
const UserController = require("../controllers/UserController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const validate = require("../middlewares/validate");
const { body } = require("express-validator");

const routes = Router();
const controller = new UserController();

// Rotas
routes.post(
  "/signIn",
  body("cpf", "cpf é obrigatório").isString().notEmpty(),
  body("password", "password é obrigatório").isString().notEmpty(),
  validate,
  controller.singIn
);
routes.post("/signOut", ensureAuthenticated, controller.signOut);
routes.post(
  "/",
  body("name").isString().optional(),
  body("cpf", "cpf é obrigatório").isString().notEmpty(),
  body("password", "password é obrigatório").isString().notEmpty(),
  body("role", "role é obrigatório").isIn(["admin", "entregador"]).notEmpty(),
  validate,
  controller.create
);
routes.get("/:id", ensureAuthenticated, controller.findById);
routes.get("/", ensureAuthenticated, controller.list);
routes.delete("/:id", ensureAuthenticated, controller.delete);

// Exporta
module.exports = routes;
