// const User = require("../server/models/user");
const models = require("../server/models/index");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors/index");

// Get all user
const getAllUser = async (req, res) => {
  const users = await models.User.findAll();
  res.status(StatusCodes.OK).json({ users });
};




// Get a user
const getUser = async (req, res) => {
  const user = await models.User.findOne({ where: { id: req.params.id } });

  if (!user) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: "User not found" });
    // throw new CustomError.NotFoundError(`User not found`);
  }
  res.status(StatusCodes.OK).json({ user });
};

// Delete a user
const deleteUser = async (req, res) => {
  const user = await models.User.destroy({ where: { id: req.params.id } });

  if (!user) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: "User not found" });
  }

  res.status(StatusCodes.OK).json({ message: `User was deleted successfully` });
};

module.exports = {
  getUser,
  getAllUser,
  deleteUser,
};
