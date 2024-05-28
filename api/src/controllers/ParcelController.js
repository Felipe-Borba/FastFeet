const createParcelService = require("../service/parcel/CreateParcelService");
const updateParcelService = require("../service/parcel/UpdateParcelService");
const deleteParcelService = require("../service/parcel/DeleteParcelService");
const listParcelService = require("../service/parcel/ListParcelService");

class ParcelController {
    async create(request, response) {
        try {
            const parcel = await createParcelService.invoque(request.body);

            return response.status(200).json(parcel);
        } catch (err) {
            return response.status(409).json();
        }
    }

    async update(request, response) {
        try {
            const parcel = await updateParcelService.invoque(request.body);

            return response.status(200).json(parcel);
        } catch (err) {
            return response.status(409).json();
        }
    }

    async delete(request, response) {
        try {
            const parcel = await deleteParcelService.invoque(request.body);

            return response.status(200).json(parcel);
        } catch (err) {
            return response.status(409).json();
        }
    }

    async list(request, response) {
        try {
            const parcel = await listParcelService.invoque(request.body);

            return response.status(200).json(parcel);
        } catch (err) {
            return response.status(409).json();
        }
    }

    async read(request, response) {
        try {
            const parcel = await readParcelService.findById(request.paramns.id);

            return response.status(200).json(parcel);
        } catch (err) {
            return response.status(409).json();
        }
    }
}

