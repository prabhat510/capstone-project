const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: String,
  author: {
    type: String,
    required: true,
  },
  rating: { type: Number, required: true },
  publisher: { type: Number, required: true },
  category: { type: Number, required: true },
  description: { type: Number, required: true },
  date_added: { type: Number, required: true },
});
