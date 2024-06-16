const ParcelService = require("../service/ParcelService");

const parcelService = new ParcelService();

class ParcelController {
  async create(request, response) {
    try {
      const parcel = await parcelService.create(request.body);

      return response.status(200).json(parcel);
    } catch (err) {
      console.log(err);
      return response.status(409).json();
    }
  }

  async update(request, response) {
    try {
      const parcel = await parcelService.update(request.body);

      return response.status(200).json(parcel);
    } catch (err) {
      return response.status(409).json();
    }
  }

  async delete(request, response) {
    try {
      const parcel = await parcelService.delete(request.body);

      return response.status(200).json(parcel);
    } catch (err) {
      return response.status(409).json();
    }
  }

  async list(request, response) {
    try {
      const parcel = await parcelService.list(request.body);

      return response.status(200).json(parcel);
    } catch (err) {
      return response.status(409).json();
    }
  }

  async findById(request, response) {
    try {
      const parcel = await parcelService.findById(request.params.id);

      return response.status(200).json(parcel);
    } catch (err) {
      return response.status(409).json();
    }
  }
}

module.exports = ParcelController;
