const { Router } = require("express");
const UserController = require("../controllers/UserController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const routes = Router();
const controller = new UserController();

// Rotas
routes.post("/signIn", controller.singIn);

routes.post("/signOut", ensureAuthenticated, controller.signOut);

routes.delete("/:id", ensureAuthenticated, controller.delete);
//CRUD

// Exporta
module.exports = routes;
