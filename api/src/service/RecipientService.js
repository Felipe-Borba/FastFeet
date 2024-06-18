const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class RecipientService {
  async create({ name }) {
    const recipient = await prisma.recipient.create({
      data: {
        name,
      },
    });
    return recipient;
  }

  async delete({ id }) {
    const recipient = await prisma.recipient.delete({
      where: {
        id,
      },
    });
    return recipient;
  }

  async list() {
    const recipient = await prisma.recipient.findMany();
    return recipient;
  }

  async update({ id, name }) {
    const recipient = await prisma.recipient.update({
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
