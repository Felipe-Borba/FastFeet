const { Router } = require("express");
const authRoutes = require("./auth.routes");

const routes = Router();

// Rotas dos controllers
routes.use("/auth", authRoutes);

module.exports = routes;
