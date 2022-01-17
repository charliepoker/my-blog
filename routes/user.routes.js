const express = require("express");
const router = express.Router();

const {
  getUser,
  getAllUser,
  deleteUser,
} = require("../controllers/user.controller");

router.route("/").get(getAllUser);
router.route("/:id").get(getUser);
router.route("/:id").delete(deleteUser);

module.exports = router;
