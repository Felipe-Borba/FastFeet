const CreateRecipientService = require("../service/recipient/CreateRecipientService");
const UpdateRecipientService = require("../service/recipient/UpdateRecipientService");
const DeleteRecipientService = require("../service/recipient/DeleteRecipientService");
const ListRecipientService = require("../service/recipient/ListRecipientService");

class RecipientController {
    constructor() {
        this.createRecipientService = new CreateRecipientService();
        this.updateRecipientService = new UpdateRecipientService();
        this.deleteRecipientService = new DeleteRecipientService();
        this.listRecipientService = new ListRecipientService();
    }

    async create(request, response) {
        try {
          const recipient = await this.createRecipientService.invoque(request.body);
    
          return response.status(200).json(recipient);
        } catch (err) {
          return response.status(409).json();
        }
      }
    
      async update(request, response) {
        try {
          const recipient = await this.updateRecipientService.invoque(request.body);
    
          return response.status(200).json(recipient);
        } catch (err) {
          return response.status(409).json();
        }
      }
    
      async delete(request, response) {
        try {
          const recipient = await this.deleteRecipientService.invoque(request.body);
    
          return response.status(200).json(recipient);
        } catch (err) {
          return response.status(409).json();
        }
      }
    
      async list(request, response) {
        try {
          const recipient = await this.listRecipientService.invoque(request.body);
    
          return response.status(200).json(recipient);
        } catch (err) {
          return response.status(409).json();
        }
      }
}

module.exports = RecipientController;