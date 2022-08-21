const router = require("express").Router();
const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const { Book } = require(path.join(__dirname, "../mongoose/models"));
const authVerify = require(path.join(__dirname, "../auth/authVerify"));

mongoose.connect(process.env.MONGODB_URI);
// before adding the book to the database, validation is done using mongoose
router.post("/add/book", authVerify, async (req, res) => {
  var new_book = await new Book(req.body);
  await new_book.save(function (error, result) {
    if (error) {
      console.log(error);
      res.json(error);
    } else {
      console.log(result);
      res.json(result);
    }
  });
});
// route for updating the details of a book
router.put("/edit/:bookId", authVerify, async (req, res) => {
  const { bookId } = req.params;
  try {
    const book = await Book.updateOne({ _id: new ObjectId(bookId) }, req.body);
    res.json(book);
  } catch (error) {
    res.json(error);
  }
});
// while deleting the book, pass the _id as a query instead of params while making a request through angular
router.delete("/remove/:bookId", authVerify, async (req, res) => {
  const { bookId } = req.params;
  try {
    await Book.deleteOne({ _id: new ObjectId(bookId) });
    res.json({ message: "book deleted" });
  } catch (error) {
    res.json(error);
  }
});
// route for book detail
router.get("/:bookId", authVerify, async (req, res) => {
  try {
    const { bookId } = req.params;
    const book = await Book.findOne({ _id: bookId });
    res.json(book);
  } catch (error) {
    res.json(error);
  }
});
module.exports = router;
