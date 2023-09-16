const express = require("express");
const mongodb = require("mongodb");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser"); // added to help post data on mongodb

const admin = require("./routes/admin/admin");
const feedback = require("./routes/feedbacks/feedback");
const auth = require("./routes/auth/auth");
const verify = require("./routes/auth/authVerify");
const path = require('path');

const mongoClient = mongodb.MongoClient;
const port = process.env.PORT || 3000;

const app = express();

// allow access from any origin
app.use(
  cors({
    origin: "*",
  })
);

// added to help post data on mongodb
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// supports functionality of .env file
dotenv.config();

// all routes
app.use("/api/feedbacks", feedback);
app.use("/api/books", admin);
app.use("/api/auth", auth);

// this route returns the list of all the books
app.get("/books", async (req, res) => {
  console.log(req.url);
  const offset = req.query.offset;
  const limit = req.query.limit;
  const client = await mongoClient.connect(process.env.MONGODB_URI);
  try {
    const db = await client.db("capstone");
    const count = await db.collection("books").count();
    const books = await db.collection("books").find().sort({_id: 1}).skip(parseInt(offset)).limit(parseInt(limit)).toArray();
    res.json({books: books, totalCount: count});
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
});
// route for token verification
app.get("/verify/token", verify, (req, res) => {
  res.status(200).send({ message: "token verified" });
});
if (process.env.ENV === "production") {
  app.use(express.static("frontend/dist/frontend"));
  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "frontend", "dist", "frontend", "index.html")
    )
  );
}

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
