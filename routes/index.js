const express = require("express");
const router = express.Router();

module.exports = function () {
  router.post("/nuevoPost");
  router.get("/allPost");
  router.get("/post/:id");
  router.put("/post/:id");
  router.delete("/post/:id");

  return router;
};
