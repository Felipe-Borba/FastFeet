const { PrismaClient } = require("@prisma/client");

class ParcelService {
  constructor() {
    this.prisma = new PrismaClient();
  }

  async create({ cep, status, codigorastreio, tipoEntrega }) {
    const parcel = await this.prisma.parcel.create({
      data: {
        cep,
        status,
        codigorastreio,
        tipoEntrega,
      },
    });
    return parcel;
  }

  async delete({ id }) {
    const parcel = await this.prisma.parcel.delete({
      where: {
        id,
      },
    });
    return parcel;
  }

  async list() {
    const parcel = await this.prisma.parcel.findMany();
    return parcel;
  }

  async findById(id) {
    const parcel = await this.prisma.parcel.findUnique({
      where: {
        id,
      },
    });
    return parcel;
  }

  async update({ id, cep, status, codigorastreio, tipoEntrega }) {
    const parcel = await this.prisma.parcel.update({
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
