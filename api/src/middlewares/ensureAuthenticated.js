const { verify } = require("jsonwebtoken");

function ensureAuthenticated(request, response, next) {
  const authHeader = request.headers.authorization;
  const auth = authHeader;

  if (!auth) {
    return response.status(403).json({
      message: "jwt token não informado",
    });
  }

  const [prefix, token] = auth.split(" ");

  try {
    const { user } = verify(token, process.env.AUTH_SECRET);
    request.user = user;

    return next();
  } catch (error) {
    return response.status(403).json({
      message: "jwt token invalido",
    });
  }
}

module.exports = ensureAuthenticated;
