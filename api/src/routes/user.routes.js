const { Router } = require("express");
const UserController = require("../controllers/UserController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const routes = Router();
const controller = new UserController();

// Rotas
routes.post("/signIn", controller.singIn);

routes.post("/signOut", ensureAuthenticated, controller.signOut);

//CRUD

// Exporta
module.exports = routes;
