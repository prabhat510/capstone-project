const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: {
    type: String,
    required: true,
  },
  image: { type: String, required: true },
  rating: Number,
  publisher: { type: String, required: true },
  genre: { type: String, required: true },
  description: { type: String, required: true },
  date_published: { type: String, required: true },
});
module.exports = mongoose.model("Book", bookSchema);
