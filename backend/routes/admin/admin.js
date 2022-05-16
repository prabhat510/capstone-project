const router = require("express").Router();
const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const Book = require("../mongoose/models");

mongoose.connect(
  "mongodb+srv://prabhat510:Prabhat123@cluster0.h16ts.mongodb.net/capstone?retryWrites=true&w=majority"
);
router.post("/add/book", async (req, res) => {
  var new_book = new Book(req.body);
  new_book.save(function (error, result) {
    if (error) {
      console.log(error);
      res.send(error.message);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});
// while deleting the book, pass the _id as a query instead of params while making a request through angular
router.delete("/remove", async (req, res) => {
  const { bookId } = req.query;
  console.log(bookId);
  try {
    await Book.deleteOne({ _id: new ObjectId(bookId) });
    res.send("book deleted");
  } catch (error) {
    res.send(error);
  }
});
module.exports = router;
