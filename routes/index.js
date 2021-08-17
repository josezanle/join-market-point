const express = require("express");
const {
  nuevoPost,
  allPosts,
  updatePostById,
  postById,
  deletePostById,
} = require("../controllers/postControllers");
const router = express.Router();

module.exports = function () {
  router.post("/nuevoPost", nuevoPost);
  router.get("/allPost", allPosts);
  router.get("/post/:id", postById);
  router.put("/post/:id", updatePostById);
  router.delete("/post/:id", deletePostById);

  return router;
};
