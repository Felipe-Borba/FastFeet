const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class ParcelService {

  async create({ cep, status, codigorastreio, tipoEntrega }) {
    const parcel = await prisma.parcel.create({
      data: {
        cep: +cep,
        status,
        codigorastreio,
        tipoEntrega,
      },
    });
    console.log(parcel)
    return parcel;
  }


  async delete({ id }) {
    const parcel = await prisma.parcel.delete({
      where: {
        id,
      },
    });
    return parcel;
  }

  async list() {
    const parcel = await prisma.parcel.findMany();
    return parcel;
  }

  async findById(id) {
    const parcel = await prisma.parcel.findUnique({
      where: {
        id,
      },
    });
    return parcel;
  }

  async update({ id, cep, status, codigorastreio, tipoEntrega }) {
    const parcel = await prisma.parcel.update({
      where: {
        id,
      },
      data: {
        cep,
        status,
        codigorastreio,
        tipoEntrega,
      },
    });
    return parcel;
  }
}

module.exports = ParcelService;
