const { Router } = require("express");
const userRoutes = require("./user.routes");
const parcelRoutes = require("./parcel.routes");

const routes = Router();

// Rotas dos controllers
routes.use("/user", userRoutes);
routes.use("/parcel", parcelRoutes);

routes.get("/hello-world", (request, response) => {
  response.json({ message: "Hello there" });
});

module.exports = routes;
