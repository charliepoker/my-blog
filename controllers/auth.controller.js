const models = require("../server/models/index");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const Helper = require("../utils/helper");

// Register User
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res
      .status(StatusCodes.BAD_GATEWAY)
      .json({ message: "Please provide username, email and password" });
  }

  if (!Helper.isValidEmail(email)) {
    return res
      .status(StatusCodes.BAD_GATEWAY)
      .json({ message: "Please enter a valid email address" });
  }

  // check if the email exists in the database
  const emailAlreadyExists = await models.User.findOne({
    where: { email: req.body.email },
  });

  if (emailAlreadyExists) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Email already exists" });
  }

  const hashPassword = await Helper.hashPassword(req.body.password);

  const user = await models.User.create({
    username: req.body.username,
    email: req.body.email,
    password: hashPassword,
  });

  const payload = { userId: user.id, username: user.username };
  const token = await Helper.generateToken(payload);
  res.status(StatusCodes.OK).json({ user, token });
};

// Signin User
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Please provide email and password" });
  }

  const user = await models.User.findOne({
    where: {
      email: req.body.email,
    },
  });

  if (!user) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: "User not found" });
  }

  const isPasswordCorrect = await Helper.comparePassword(
    user.password,
    password
  );

  if (!isPasswordCorrect) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Please provide correct password",
    });
  }

  const payload = { userId: user.id, username: user.username };
  const token = await Helper.generateToken(payload);

  res
    .cookie("access_token", token, {
      signed: true,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    })
    .status(StatusCodes.OK)
    .json({ message: "Logged in successfully 😊 👌" });
};

module.exports = {
  registerUser,
  loginUser,
};
