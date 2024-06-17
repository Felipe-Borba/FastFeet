const RecipientService = require("../service/RecipientService");
const recipientService = new RecipientService();

class RecipientController {
  async create(request, response) {
    try {
      const recipient = await recipientService.create(request.body);

      return response.status(200).json(recipient);
    } catch (err) {
      return response.status(500).json(err.message);
    }
  }

  async update(request, response) {
    try {
      const recipient = await recipientService.update(request.body);

      return response.status(200).json(recipient);
    } catch (err) {
      return response.status(500).json(err.message);
    }
  }

  async delete(request, response) {
    try {
      await recipientService.delete(request.params);

      return response.status(204).json();
    } catch (err) {
      return response.status(500).json(err.message);
    }
  }

  async list(request, response) {
    try {
      const recipients = await recipientService.list();

      return response.status(200).json(recipients);
    } catch (err) {
      return response.status(500).json(err.message);
    }
  }
}

module.exports = RecipientController;
