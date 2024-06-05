const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

class ListRecipientService {
    async invoque() {
        const recipient = await prisma.recipient.findMany()
        return recipient;
    }
}

module.exports = ListRecipientService;