const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();


class CreateParcelService {
    async invoque({ cep, status, codigorastreio, tipoEntrega }) {

        const parcel = await prisma.parcel.create({
            data: {
                cep,
                status,
                codigorastreio,
                tipoEntrega
            },
        });
        return parcel;
    }
}

module.export = CreateParcelService;
