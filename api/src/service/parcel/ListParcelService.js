const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

class ListParcelService {
    async invoque() {
        const parcel = await prisma.parcel.findMany()
        return parcel;
    }
}

module.export = ListParcelService;