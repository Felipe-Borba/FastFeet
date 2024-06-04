const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

class ReadParcelService {
    async findById(id) {
        const parcel = await prisma.parcel.findUnique({
            where: {
                id,
            },
        })
        return parcel;
    }
}

module.exports = ReadParcelService;