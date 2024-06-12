const UserService = require("../service/UserService");


class UserController {
  constructor() {
    this.userService = new UserService();
  }

  async singIn(request, response) {
    try {
      const { cpf, password } = request.body;

      const token = await this.userService.singIn(cpf, password);

      response.json(token);
    } catch (err) {
      return response.status(403).json();
    }
  }

  async signOut(request, response) {
    try {
      await this.userService.signOut();

      return response.status(204);
    } catch (err) {
      return response.status(403).json();
    }
  }

  async create(request, response) {
    try {
      const user = await this.userService.create(request.body);

      return response.status(200).json(user);
    } catch (err) {
      return response.status(409).json();
    }
  }

  async list(request, response) {
    try {
      const users = await this.userService.list();

      return response.status(200).json(user);
    } catch(err) {
      return response.status(500).json();
    }
  }

  async findById(request, response) {
    try {
      const user = await this.userService.findById(request.params.id);
      return response.status(200).json(user);
    } catch (err) {
      return response.status(409).json();
    }
  }

  async delete(request, response) {
    try {
      const user = await this.userService.delete({ id: request.params.id });

      return response.status(200).json(user);
    } catch (err) {
      return response.status(500).json();
    }
  }
}

module.exports = UserController;
