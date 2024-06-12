const RecipientService = require("../service/RecipientService");

class RecipientController {
  constructor() {
    this.recipientService = new RecipientService();
  }

  async create(request, response) {
    try {
      const recipient = await this.recipientService.create(request.body);

      return response.status(200).json(recipient);
    } catch (err) {
      return response.status(409).json();
    }
  }

  async update(request, response) {
    try {
      const recipient = await this.recipientService.update(request.body);

      return response.status(200).json(recipient);
    } catch (err) {
      return response.status(409).json();
    }
  }

  async delete(request, response) {
    try {
      const recipient = await this.recipientService.delete(request.params);

      return response.status(200).json(recipient);
    } catch (err) {
      return response.status(409).json();
    }
  }

  async list(request, response) {
    try {
      const recipients = await this.recipientService.list();

      return response.status(200).json(recipients);
    } catch (err) {
      return response.status(500).json();
    }
  }
}

module.exports = RecipientController;
