const CreateParcelService = require("../service/parcel/CreateParcelService");
const UpdateParcelService = require("../service/parcel/UpdateParcelService");
const DeleteParcelService = require("../service/parcel/DeleteParcelService");
const ListParcelService = require("../service/parcel/CreateParcelService");
const ReadParcelService = require("../service/parcel/ReadParcelService");

class ParcelController {
  constructor() {
    this.createParcelService = new CreateParcelService();
    this.updateParcelService = new UpdateParcelService();
    this.deleteParcelService = new DeleteParcelService();
    this.listParcelService = new ListParcelService();
    this.readParcelService = new ReadParcelService();
  }

  async create(request, response) {
    try {
      const parcel = await this.createParcelService.invoque(request.body);

      return response.status(200).json(parcel);
    } catch (err) {
      return response.status(409).json();
    }
  }

  async update(request, response) {
    try {
      const parcel = await this.updateParcelService.invoque(request.body);

      return response.status(200).json(parcel);
    } catch (err) {
      return response.status(409).json();
    }
  }

  async delete(request, response) {
    try {
      const parcel = await this.deleteParcelService.invoque(request.body);

      return response.status(200).json(parcel);
    } catch (err) {
      return response.status(409).json();
    }
  }

  async list(request, response) {
    try {
      const parcel = await this.listParcelService.invoque(request.body);

      return response.status(200).json(parcel);
    } catch (err) {
      return response.status(409).json();
    }
  }

  async read(request, response) {
    try {
      const parcel = await this.readParcelService.findById(request.paramns.id);

      return response.status(200).json(parcel);
    } catch (err) {
      return response.status(409).json();
    }
  }
}

module.exports = ParcelController;
