const router = require("express").Router();
const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Book = require("../mongoose/models");

mongoose.connect(
  "mongodb+srv://prabhat510:Prabhat123@cluster0.h16ts.mongodb.net/capstone?retryWrites=true&w=majority"
);
// before adding the book to the database, validation is done using mongoose
router.post("/add/book", async (req, res) => {
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
// while deleting the book, pass the _id as a query instead of params while making a request through angular
router.delete("/remove/:bookId", async (req, res) => {
  const { bookId } = req.params;
  try {
    await Book.deleteOne({ _id: new ObjectId(bookId) });
    res.json({ message: "book deleted" });
  } catch (error) {
    res.json(error);
  }
});
// route for book detail
router.get("/:bookId", async (req, res) => {
  try {
    const { bookId } = req.params;
    const book = await Book.findOne({ _id: bookId });
    res.json(book);
  } catch (error) {
    res.json(error);
  }
});
module.exports = router;
