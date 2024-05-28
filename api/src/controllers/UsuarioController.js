const UserAuthService = require("../service/user/UserAuthService");
const CreateUserService = require("../service/user/CreateUserService");

const userAuthService = new UserAuthService();
const createUserService = new CreateUserService();

class UserController {
  constructor(userAuthService){
    this.userAuthService = userAuthService
  }

  async singIn(request, response) {
    try {
      const { cpf, password } = request.body;

      const token = await this.userAuthService.singIn(cpf, password);

      response.json(token);
    } catch (err) {
      return response.status(403).json();
    }
  }

  async signOut(request, response) {
    try {
      await this.userAuthService.signOut();

      return response.status(204);
    } catch (err) {
      return response.status(403).json();
    }
  }

  async create(request, response) {
    try {
      const user = await this.createUserService.invoque(request.body);

      return response.status(200).json(user);
    } catch (err) {
      return response.status(409).json();
    }
  }

  async read(request, response) {
    try {
      const user = await this.readUserService.findById(request.params.id)
      return response.status(200).json(user)
    } catch (err) {
      return response.status(409).json();
    }
  }
}

module.export = UserController;
