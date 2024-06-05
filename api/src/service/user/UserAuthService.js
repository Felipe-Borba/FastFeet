const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

class UserAuthService {
  async singIn(cpf, password) {
    const user = await prisma.user.findUnique({
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

module.exports = UserAuthService;
