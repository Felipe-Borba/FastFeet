const { Router } = require("express");
const userRoutes = require("./user.routes");

const routes = Router();

// Rotas dos controllers
routes.use("/user", userRoutes);

module.exports = routes;
