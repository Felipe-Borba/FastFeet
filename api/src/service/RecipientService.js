const { PrismaClient } = require("@prisma/client");

class RecipientService {
  constructor() {
    this.prisma = new PrismaClient();
  }

  async create({ name }) {
    const recipient = await this.prisma.recipient.create({
      data: {
        name,
      },
    });
    return recipient;
  }

  async delete({ id }) {
    const recipient = await this.prisma.recipient.delete({
      where: {
        id,
      },
    });
    return recipient;
  }

  async list() {
    const recipient = await this.prisma.recipient.findMany();
    return recipient;
  }

  async update({ id, name }) {
    const recipient = await this.prisma.recipient.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });
    return recipient;
  }
}

module.exports = RecipientService;
