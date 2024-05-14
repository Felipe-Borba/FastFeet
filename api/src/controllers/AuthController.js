const { hash, compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

const prisma = new PrismaClient();

class AuthController {
  async create(request, response) {
    try {
      const { cpf, password } = request.body;

      const hashedPassword = await hash(password, 8);

      const user = await prisma.auth.create({
        data: {
          cpf,
          password: hashedPassword,
        },
      });

      response.json(user);
    } catch (err) {
      return response.status(409).json();
    }
  }

  async login(request, response) {
    try {
      const { cpf, password } = request.body;

      const user = await prisma.auth.findUnique({
        where: { cpf },
      });

      if (!user) {
        return response
          .status(403)
          .json({ message: "senha ou cpf incorreto" });
      }

      const passwordMatched = await compare(password, user.password);

      if (!passwordMatched) {
        return response
          .status(403)
          .json({ message: "senha ou cpf incorreto" });
      }

      const token = sign({ user }, process.env.AUTH_SECRET, {
        expiresIn: 86400, // expira em 24 horas
      });

      response.json({ token });
    } catch (err) {
      return response.status(409).json();
    }
  }
}

module.exports = AuthController;
