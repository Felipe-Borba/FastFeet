const UserService = require("../service/UserService");

const userService = new UserService();
class UserController {
  async singIn(request, response) {
    try {
      const { cpf, password } = request.body;

      const data = await userService.singIn(cpf, password);

      response.json(data);
    } catch (err) {
      return response.status(500).json(err.message);
    }
  }

  async signOut(request, response) {
    try {
      await userService.signOut();

      return response.status(204);
    } catch (err) {
      return response.status(403).json();
    }
  }

  async create(request, response) {
    try {
      const user = await userService.create(request.body);

      return response.status(200).json(user);
    } catch (err) {
      return response.status(500).json(err.message);
    }
  }

  async list(request, response) {
    try {
      const users = await userService.list();

      return response.status(200).json(user);
    } catch (err) {
      return response.status(500).json();
    }
  }

  async findById(request, response) {
    try {
      let user = null;
      if (request.params.id == "me") {
        user = await userService.findById(request.user.id);
      } else {
        user = await userService.findById(request.params.id);
      }
      return response.status(200).json(user);
    } catch (err) {
      return response.status(409).json(err.message);
    }
  }

  async delete(request, response) {
    try {
      const user = await userService.delete({ id: request.params.id });

      return response.status(200).json(user);
    } catch (err) {
      return response.status(500).json();
    }
  }
}

module.exports = UserController;
