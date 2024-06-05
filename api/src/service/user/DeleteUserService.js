const { PrismaClient } = require("@prisma/client");

class DeleteUserService {
  constructor() {
    this.prisma = new PrismaClient()
  }
  async invoque(id) {
    const user = await this.prisma.user.delete({ where: { id } })
  }
}

module.exports = DeleteUserService;