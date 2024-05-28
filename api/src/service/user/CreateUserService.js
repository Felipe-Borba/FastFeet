const { hash } = require("bcryptjs");
const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

class CreateUserService {
  async invoque({ cpf, password, name, role }) {
    const hashedPassword = await hash(password, 8);

    const user = await prisma.auth.create({
      data: {
        cpf,
        password: hashedPassword,
        name,
        role,
      },
    });
    return user;
  }
}

module.export = CreateUserService;
