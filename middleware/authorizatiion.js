const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

// const authenticateUser = async (req, res, next) => {
//   const authorization = req.headers.authorization;
//   if (!authorization) {
//     return res
//       .status(StatusCodes.FORBIDDEN)
//       .json({ message: "Authentication invalid" });
//   }

//   const token = authorization.split(" ")[1];
//   console.log(token);

//   try {
//     const payload = jwt.verify(token, process.env.JWT_SECRET);
//     console.log(payload);
//     // const payloadDetails= Object.values(payload)
//     return next();
//   } catch {
//     return res.sendStatus(403).json({ message: "In" });
//   }
// };

const authenticateUser = async (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return res.status(StatusCodes.FORBIDDEN).json({ message: "Unauthorized" });
  }
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = data.id;
    console.log(data, req.userId);
    return next();
  } catch {
    return res.sendStatus(403);
  }
};

module.exports = { authenticateUser };
