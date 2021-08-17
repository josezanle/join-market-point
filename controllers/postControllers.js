const Post = require("../models/Post");

exports.nuevoPost = async (req, res) => {
  const newPost = new Post(req.body);

  try {
    // enviar a la db
    const post = await newPost.save();
    res.status(201).json({
      ok: true,
      message: "Created",
      body: post,
    });
  } catch (error) {
    console.log(error);
  }
};

// all posts
exports.allPosts = async (req, res) => {
  try {
    // enviar a la db
    const posts = await Post.find();
    res.status(200).json({
      ok: true,
      message: "All posts",
      body: posts,
    });
  } catch (error) {
    console.log(error);
  }
};

// post by ID
exports.postById = async (req, res) => {
  try {
    // enviar a la db
    const post = await Post.findById(req.params.id);
    res.status(200).json({
      ok: true,
      message: "Post by id",
      body: post,
    });
  } catch (error) {
    console.log(error);
  }
};

// Update post by ID
exports.updatePostById = async (req, res) => {
  try {
    // enviar a la db
    const updatedPost = await Post.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json({
      ok: true,
      message: "Updated Post!!",
      body: updatedPost,
    });
  } catch (error) {
    console.log(error);
  }
};

// Update post by ID
exports.deletePostById = async (req, res) => {
  try {
    // enviar a la db
    const updatedPost = await Post.findByIdAndRemove({ _id: req.params.id });
    res.status(200).json({
      ok: true,
      message: "Deleted Post",
    });
  } catch (error) {
    console.log(error);
  }
};
