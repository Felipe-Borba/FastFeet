const { Router } = require("express");
const userRoutes = require("./user.routes");
const parcelRoutes = require("./parcel.routes");

const routes = Router();

// Rotas dos controllers
routes.use("/user", userRoutes);
routes.use("/parcel", parcelRoutes);

routes.get("/wealth-check", (request, response) => {
  response.status(200).json({ message: "Ok" });
});

module.exports = routes;
