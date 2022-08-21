const express = require("express");
const mongodb = require("mongodb");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser"); // added to help post data on mongodb

const admin = require("./routes/admin/admin");
const feedback = require("./routes/feedbacks/feedback");
const auth = require("./routes/auth/auth");
const verify = require("./routes/auth/authVerify");
const mongoClient = mongodb.MongoClient;

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
app.use("/feedbacks", feedback);
app.use("/books", admin);
app.use("/auth", auth);

// this route returns the list of all the books
app.get("/home/:para?", verify, async (req, res) => {
  console.log(req.url);
  const sort_using = req.params.para;
  const client = await mongoClient.connect(process.env.MONGODB_URI);
  try {
    const db = await client.db("capstone");
    // when param is not present
    if (!sort_using) {
      const books = await db.collection("books").find().toArray();
      res.json(books);
    } else {
      const books = await db
        .collection("books")
        .find()
        .sort({ sort_using: 1 })
        .toArray();
      res.json(books);
    }
  } catch (error) {
    console.log(error);
  }
});
// this route facilitates the sorting of books based on different parameters
// app.get("/books/sortby/:para", async (req, res) => {
//   const client = await mongoClient.connect(process.env.DB_CONNECT);
//   try {
//     const db = await client.db("capstone");

//     res.json(books);
//   } catch (error) {
//     console.log(error);
//   }
// });
// route for token verification
app.get("/verify/token", verify, (req, res) => {
  res.status(200).send({ message: "token verified" });
});

// in production if 3000 is not available then it might give error, so to avoid it
// in production set NODE_ENV to production and MONGODB_URI to the database string
const port = process.env.PORT || 3000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/dist/frontend"));

  // this is a catch all route
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "./frontend/dist/frontend/index.html"));
  });
}

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
