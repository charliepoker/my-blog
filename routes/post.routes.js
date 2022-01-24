const express = require("express");
const router = express.Router();
const { authenticateUser } = require("../middleware/authorizatiion");
const {
  getAllPost,
  getPost,
  deletePost,
  updatePost,
  createPost,
  getUserPost,
} = require("../controllers/post.controller");

router.route("/").post(authenticateUser, createPost).get(getAllPost);
router.route("/:id").get(getPost).patch(updatePost);
router.route("/:id").delete(deletePost);
router.route("/user-post/:id").get(getUserPost);

module.exports = router;
