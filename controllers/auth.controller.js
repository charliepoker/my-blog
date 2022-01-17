const models = require("../server/models/index");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

// Register User
const registerUser = async (req, res) => {
  res.send("Register User");
};

// Signin User
const loginUser = async (req, res) => {
  res.send("Login user");
};

module.exports = {
  registerUser,
  loginUser,
};
