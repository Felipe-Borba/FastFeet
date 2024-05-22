const { hash, compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

const prisma = new PrismaClient();

class UsuarioAuthService {
  async singIn(cpf, senha) {
    const user = await prisma.usuario.findUnique({
      where: { cpf },
    });

    if (!user) {
      throw new Error("senha ou cpf incorreto");
    }

    const passwordMatched = await compare(senha, user.senha);

    if (!passwordMatched) {
      throw new Error("senha ou cpf incorreto");
    }

    const token = sign({ user }, process.env.AUTH_SECRET, {
      expiresIn: 86400, // expira em 24 horas
    });

    return token;
  }

  signOut() {}
}

module.export = UsuarioAuthService;
