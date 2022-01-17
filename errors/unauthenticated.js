const { StatusCodes } = require("http-status-codes");
const CustomError = require("./customError");

class UnauthenticatedError extends CustomError {
  constructor(message) {
    super(message);
    this.StatusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnauthenticatedError;
