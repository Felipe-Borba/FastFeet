const { validationResult } = require("express-validator");

function validate(request, response, next) {
  const validateError = validationResult(request);
  const message = validateError
    .formatWith(({ type, msg }) => {
      return `${type} ${msg}`;
    })
    .array();

  if (!validateError.isEmpty()) {
    return response.status(400).json({
      message,
    });
  }

  next();
}

module.exports = validate;
