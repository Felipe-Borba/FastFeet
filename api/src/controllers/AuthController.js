const { hash, compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

const prisma = new PrismaClient();

class AuthController {
  async create(request, response) {
    try {
      const { username, password } = request.body;

      const hashedPassword = await hash(password, 8);

      const user = await prisma.auth.create({
        data: {
          username,
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
      const { username, password } = request.body;

      const user = await prisma.auth.findUnique({
        where: { username },
      });

      if (!user) {
        return response
          .status(403)
          .json({ message: "senha ou email incorreto" });
      }

      const passwordMatched = await compare(password, user.password);

      if (!passwordMatched) {
        return response
          .status(403)
          .json({ message: "senha ou email incorreto" });
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
