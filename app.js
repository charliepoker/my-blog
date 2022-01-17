require("dotenv").config();

// Set up the express app
const express = require("express");
const app = express();

app.use(express.json());

// Log requests to the console.
const logger = require("morgan");
app.use(logger("dev"));

const userRouter = require("./routes/user.routes");
const postRouter = require("./routes/post.routes");
const authRouter = require("./routes/auth.routes");

// Simple route
app.get("/", (req, res) => {
  res.send("Welcome to my blog App.");
});

// Routes
app.use("/blog/user", userRouter);
app.use("/blog/post", postRouter);
app.use("/blog/auth", authRouter);

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
