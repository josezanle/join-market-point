const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  image: {
    type: String,
  },
  titulo: {
    type: String,
    require: true,
  },
  descripcion: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Post", postSchema);
