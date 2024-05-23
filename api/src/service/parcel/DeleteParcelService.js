const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

class DeleteParcelService {
    async invoque({ id }) {
        const parcel = await prisma.parcel.delete({
            where: {
                id,
            },
        })
        return parcel;
    }
}

module.export = DeleteParcelService;