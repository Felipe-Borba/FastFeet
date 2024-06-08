const ParcelService = require("../service/ParcelService");

class ParcelController {
  constructor() {
    this.parcelService = new ParcelService();
  }

  async create(request, response) {
    try {
      const parcel = await this.parcelService.create(request.body);

      return response.status(200).json(parcel);
    } catch (err) {
      return response.status(409).json();
    }
  }

  async update(request, response) {
    try {
      const parcel = await this.parcelService.update(request.body);

      return response.status(200).json(parcel);
    } catch (err) {
      return response.status(409).json();
    }
  }

  async delete(request, response) {
    try {
      const parcel = await this.parcelService.delete(request.body);

      return response.status(200).json(parcel);
    } catch (err) {
      return response.status(409).json();
    }
  }

  async list(request, response) {
    try {
      const parcel = await this.parcelService.list(request.body);

      return response.status(200).json(parcel);
    } catch (err) {
      return response.status(409).json();
    }
  }

  async read(request, response) {
    try {
      const parcel = await this.parcelService.findById(request.params.id);

      return response.status(200).json(parcel);
    } catch (err) {
      return response.status(409).json();
    }
  }
}

module.exports = ParcelController;
