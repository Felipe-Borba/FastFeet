const { PrismaClient } = require("@prisma/client");
const { sign } = require("jsonwebtoken");

const prisma = new PrismaClient();

class UserService {
  async create({ name, cpf, password, role }) {
    const findUser = await prisma.user.findFirst({
      where: {
        cpf: cpf
      }
    })

    if(findUser != null){
      throw new Error("CPF ja cadastrado")
    }

    const user = await prisma.user.create({
      data: {
        name,
        cpf,
        password,
        role,
      },
    });
    return user;
  }

  async delete({ id }) {
    const user = await prisma.user.delete({
      where: {
        id,
      },
    });
    return user;
  }

  async list() {
    const users = await prisma.user.findMany();
    return users;
  }

  async findById(id) {
    const user = await prisma.user.findUnique({ where: { id } });
    delete user.password;
    return user;
  }

  async update({ id, name, cpf, password, role }) {
    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
        cpf,
        password,
        role
      },
    });
    return user;
  }

  async singIn(cpf, password) {
    const user = await prisma.user.findUnique({
      where: { cpf },
    });

    if (!user) {
      throw new Error("senha ou cpf incorreto");
    }

    const passwordMatched = password == user.password;

    if (!passwordMatched) {
      throw new Error("senha ou cpf incorreto");
    }

    const token = sign({ user }, process.env.AUTH_SECRET, {
      expiresIn: 86400, // expira em 24 horas
    });

    delete user.password;
    return { token, user };
  }

  async signOut() { }
}

module.exports = UserService;
