const CustomError = require("./customError");
const BadRequestError = require("./badRequest");
const NotFoundError = require("./notFound");
const UnauthenticatedError = require("./unauthenticated");

module.exports = {
  BadRequestError,
  CustomError,
  NotFoundError,
  UnauthenticatedError,
};
