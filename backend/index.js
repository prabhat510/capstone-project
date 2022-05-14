const express = require("express");
const mongodb = require("mongodb");
const dotenv = require("dotenv");
const bodyParser = require("body-parser"); // added to help post data on mongodb
const mongoClient = mongodb.MongoClient;
const port = 3000;

const app = express();

// added to help post data on mongodb
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// supports functionality of .env file
dotenv.config();

app.get("/home", async (req, res) => {
  const client = await mongoClient.connect(process.env.DB_CONNECT);
  try {
    const db = await client.db("capstone");
    const books = await db.collection("books").find().toArray();
    console.log(books);
  } catch (error) {
    console.log(error);
  }
  //   check if url has any query
  if (Object.keys(req.query).length === 0) {
    res.send("no queries");
  } else {
    const sort_using = req.query.sortby;
  }
});
app.get("/feedbacks", async (req, res) => {
  const client = await mongoClient.connect(process.env.DB_CONNECT);
  try {
    const db = await client.db("capstone");
    const feedbacks = await db.collection("feedbacks").find().toArray();
    console.log(feedbacks);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
});
app.post("/feedback", async (req, res) => {
  const client = await mongoClient.connect(process.env.DB_CONNECT);
  try {
    const db = await client.db("capstone");
    const feedback = await db.collection("feedbacks").insertOne(req.body);
    res.send({ message: "feedback created" });
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
});
app.get("/book/:name", async (req, res) => {
  const { name } = req.params;
  const client = await mongoClient.connect(process.env.DB_CONNECT);
  try {
    const db = await client.db("capstone");
    const book = await db.collection("books").findOne({ name: name });
    res.json(book);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
});
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
