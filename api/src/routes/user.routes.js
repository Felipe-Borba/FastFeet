const { Router } = require("express");
const UserController = require("../controllers/UserController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const routes = Router();
const controller = new UserController();

// Rotas
routes.post("/signIn", controller.singIn);
routes.post("/signOut", ensureAuthenticated, controller.signOut);
routes.post("/", controller.create);
routes.get("/:id", ensureAuthenticated, controller.findById);
routes.get("/", ensureAuthenticated, controller.list);
routes.delete("/:id", ensureAuthenticated, controller.delete);

// Exporta
module.exports = routes;
