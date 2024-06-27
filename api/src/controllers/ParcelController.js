const ParcelService = require("../service/ParcelService");

const parcelService = new ParcelService();

class ParcelController {
  async create(request, response) {
    try {
      const parcel = await parcelService.create(request.body);

      return response.status(200).json(parcel);
    } catch (err) {
      return response.status(500).json(err.message);
    }
  }

  async update(request, response) {
    try {
      console.log(request.body);
      const parcel = await parcelService.update(request.body);

      return response.status(200).json(parcel);
    } catch (err) {
      return response.status(500).json(err.message);
    }
  }

  async delete(request, response) {
    try {
      await parcelService.delete(request.params);

      return response.status(204).json();
    } catch (err) {
      return response.status(500).json(err.message);
    }
  }

  async list(request, response) {
    try {
      const parcel = await parcelService.list(request.user);

      return response.status(200).json(parcel);
    } catch (err) {
      return response.status(500).json(err.message);
    }
  }

  async findById(request, response) {
    try {
      const parcel = await parcelService.findById(request.params.id);

      return response.status(200).json(parcel);
    } catch (err) {
      return response.status(500).json(err.message);
    }
  }

  async markAsDelivered(request, response) {
    try {
      const parcel = await parcelService.markAsDelivered(request.params.id);

      return response.status(200).json(parcel);
    } catch (err) {
      return response.status(500).json(err.message);
    }
  }

  async markAsReturn(request, response) {
    try {
      const parcel = await parcelService.markAsReturn(request.params.id);

      return response.status(200).json(parcel);
    } catch (err) {
      return response.status(500).json(err.message);
    }
  }

  async markAsCancel(request, response) {
    try {
      const parcel = await parcelService.markAsCancel(request.params.id);

      return response.status(200).json(parcel);
    } catch (err) {
      return response.status(500).json(err.message);
    }
  }
}

module.exports = ParcelController;
