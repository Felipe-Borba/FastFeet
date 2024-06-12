const { PrismaClient } = require("@prisma/client");
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

class UserService {
  constructor() {
    this.prisma = new PrismaClient();
  }

  async create({ cpf, password, name, role }) {
    const hashedPassword = await hash(password, 8);

    const user = await this.prisma.auth.create({
      data: {
        cpf,
        password: hashedPassword,
        name,
        role,
      },
    });
    return user;
  }

  async delete({ id }) {
    const user = await this.prisma.user.delete({
      where: {
        id,
      },
    });
    return user;
  }

  async list() {
    const user = await this.prisma.user.findMany();
  }

  async read() {
    const user = await this.prisma.user.findUnique({ where: { id } });
    return user;
  }

  async update({ id, name }) {
    const user = await this.prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });
    return user;
  }

  async singIn(cpf, password) {
    const user = await this.prisma.user.findUnique({
      where: { cpf },
    });

    if (!user) {
      throw new Error("senha ou cpf incorreto");
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new Error("senha ou cpf incorreto");
    }

    const token = sign({ user }, process.env.AUTH_SECRET, {
      expiresIn: 86400, // expira em 24 horas
    });

    return token;
  }
}

module.exports = UserService;
