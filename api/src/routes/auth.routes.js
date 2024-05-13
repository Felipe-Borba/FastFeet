const { Router } = require("express");
const jwt = require("jsonwebtoken");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const routes = Router();

// Rotas
routes.get("/public", (req, res) => {
  res.status(200).send("funcionou");
});

routes.get("/private", ensureAuthenticated, (req, res) => {
  res.status(200).send("funcionou");
});

routes.post("/logout", ensureAuthenticated, (req, res) => {
  res.status(200).send({ token: null });
});

routes.get("/me", function (req, res) {
  const authHeader = req.headers.authorization;
  const auth = authHeader;
  const [, token] = auth.split(" ");

  if (!token) {
    return res
      .status(401)
      .json({ auth: false, message: "Nenhum token informado." });
  }

  try {
    const token = jwt.verify(token, process.env.AUTH_SECRET);

    return res.status(200).json(token);
  } catch (error) {
    return response.status(401).json({
      message: "Falha ao autenticar o token.",
    });
  }
});

// Exporta
module.exports = routes;
