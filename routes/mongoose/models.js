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
  date_published: { type: Date, required: true },
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: {
    type: String,
    required: true,
  },
  isAdmin: Boolean,
});

const Book = mongoose.model("Book", bookSchema);
const User = mongoose.model("User", userSchema);
module.exports = { Book, User };
