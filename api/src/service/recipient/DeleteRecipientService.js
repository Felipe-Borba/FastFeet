const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

class DeleteRecipientService {
    async invoque({ id }) {
        const recipient = await prisma.recipient.delete({
            where: {
                id,
            },
        })
        return recipient;
    }
}

module.exports = DeleteRecipientService;