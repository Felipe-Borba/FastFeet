const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();


class CreateRecipientService {
  async invoque({ name }) {

    const recipient = await prisma.recipient.create({
      data: {
        name
      },
    });
    return recipient;
  }
}

module.exports = CreateRecipientService;
