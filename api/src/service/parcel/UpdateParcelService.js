const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

class UpdateParcelService {
    async invoque({ id, cep, status, codigorastreio, tipoEntrega }) {

        const parcel = await prisma.parcel.update({
            where: {
                id
            },
            data: {
                cep,
                status,
                codigorastreio,
                tipoEntrega
            },
        })
        return parcel;
    }

}

module.exports = UpdateParcelService;