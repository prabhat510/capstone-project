const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: String,
  author: {
    type: String,
    required: true,
  },
  // image: {
  //   type: Image,
  // },
  rating: { type: Number, required: true },
  publisher: { type: String, required: true },
  category: { type: String, required: true },
  description: String,
  // published_on: Date,
});

module.exports = mongoose.model("Book", bookSchema);
