const { Router } = require("express");
const ParcelController = require("../controllers/ParcelController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const routes = Router();
const controller = new ParcelController();

// Rotas
routes.post("/", ensureAuthenticated, controller.create);
routes.get("/", ensureAuthenticated, controller.list);
routes.put("/", ensureAuthenticated, controller.update);
routes.delete("/", ensureAuthenticated, controller.delete);
routes.get("/:id", ensureAuthenticated, controller.findById);

// Exporta
module.exports = routes;
