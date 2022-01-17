const express = require("express");
const router = express.Router();
const {
  getAllPost,
  getPost,
  deletePost,
  updatePost,
  createPost,
  getUserPost
} = require("../controllers/post.controller");

router.route("/").post(createPost).get(getAllPost);
router.route("/:id").get(getPost).patch(updatePost);
router.route("/:id").delete(deletePost);
router.route("/user-post/:id").get(getUserPost);

module.exports = router;