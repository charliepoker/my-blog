const models = require("../server/models/index");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

// Create a Post
const createPost = async (req, res, next) => {
  if (!req.body.title || !req.body.content) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Please provide title and content" });
  }
  const post = await models.Post.create(req.body);

  res.status(StatusCodes.CREATED).json({ message: "Post created", post });
};
// Get all Posts
const getAllPost = async (req, res) => {
  const posts = await models.Post.findAll();
  res.status(StatusCodes.OK).json({ posts });
};

// Get a Post
const getPost = async (req, res) => {
  const post = await models.Post.findOne({ where: { id: req.params.id } });

  if (!post) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: "Post not found" });
    // throw new CustomError.NotFoundError(`User not found`);
  }
  res.status(StatusCodes.OK).json({ post });
};

// Delete a Post
const deletePost = async (req, res) => {
  const post = await models.Post.destroy({ where: { id: req.params.id } });

  if (!post) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: "Post not found" });
  }
  res.status(StatusCodes.OK).json({ message: `Post was deleted successfully` });
};

// Update a Post
const updatePost = async (req, res) => {
  const post = await models.Post.findOne({ where: { id: req.params.id } });

  if (!post) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: "Post not found" });
  }
  post.set({
    title: req.body.title,
    content: req.body.content,
  });

  await post.save();

  res.status(StatusCodes.OK).json({ post });
};

// Incomplete
// Get posts by a user
const getUserPost = async (req, res) => {
  const post = await models.Post.findAll({ where: { userId: req.params.id } });

  res.status(StatusCodes.OK).json({ post });
};

module.exports = {
  getAllPost,
  getPost,
  deletePost,
  updatePost,
  createPost,
  getUserPost,
};
