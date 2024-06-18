const ParcelService = require("../service/ParcelService");

const parcelService = new ParcelService();

class ParcelController {
  async create(request, response) {
    try {
      const parcel = await parcelService.create(request.body);

      return response.status(200).json(parcel);
    } catch (err) {
      return response.status(500).json(arr.message);
    }
  }

  async update(request, response) {
    try {
      const parcel = await parcelService.update(request.body);

      return response.status(200).json(parcel);
    } catch (err) {
      return response.status(500).json(arr.message);
    }
  }

  async delete(request, response) {
    try {
      const parcel = await parcelService.delete(request.body);

      return response.status(200).json(parcel);
    } catch (err) {
      return response.status(500).json(arr.message);
    }
  }

  async list(request, response) {
    try {
      const parcel = await parcelService.list();

      return response.status(200).json(parcel);
    } catch (err) {
      return response.status(500).json(arr.message);
    }
  }

  async findById(request, response) {
    try {
      const parcel = await parcelService.findById(request.params.id);

      return response.status(200).json(parcel);
    } catch (err) {
      return response.status(500).json(arr.message);
    }
  }
}

module.exports = ParcelController;
