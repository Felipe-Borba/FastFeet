

const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

class UpdateRecipientService {
    async invoque({ id, name }) {

        const recipient = await prisma.recipient.update({
            where: {
                id
            },
            data: {
                name
            },
        })
        return recipient;
    }

}

module.exports = UpdateRecipientService;