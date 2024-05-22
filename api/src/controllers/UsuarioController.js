const UsuarioAuthService = require("../service/user/UsuarioAuthService");

const usuarioAuthService = new UsuarioAuthService();

class UsuarioController {
  async singIn(request, response) {
    try {
      const { cpf, senha } = request.body;

      const token = await usuarioAuthService.singIn(cpf, senha);

      response.json(token);
    } catch (err) {
      return response.status(403).json();
    }
  }

  async signOut(request, response) {
    try {
      await usuarioAuthService.signOut();

      return response.status(204);
    } catch (err) {
      return response.status(403).json();
    }
  }
}

module.export = UsuarioController;
