const mongodb = require("mongodb");
const router = require("express").Router();
const path = require("path");
const uri = process.env.MONGODB_URI;

const authVerify = require(path.join(__dirname, "../auth/authVerify"));
const mongoClient = mongodb.MongoClient;

router.get("/display", authVerify, async (req, res) => {
  const client = await mongoClient.connect(uri);
  try {
    const db = await client.db("capstone");
    const feedbacks = await db.collection("feedbacks").find().toArray();
    console.log(feedbacks);
    res.send(feedbacks);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
});
router.post("/add/feedback", authVerify, async (req, res) => {
  const client = await mongoClient.connect(uri);
  try {
    const db = await client.db("capstone");
    const feedback = await db.collection("feedbacks").insertOne(req.body);
    res.json(feedback);
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
});
// checking if the user has already given the feedback
router.post("/user/feedback/exists", async (req, res) => {
  const client = await mongoClient.connect(uri);
  try {
    const db = await client.db("capstone");
    const feedbacks = await db.collection("feedbacks").find().toArray();
    for (const feedback of feedbacks) {
      if (feedback.username === req.body.username) {
        return res.json({ exists: true });
      }
    }
    res.json({ exists: false });
  } catch (error) {
    console.log(error);
  } finally {
    client.close();
  }
});
module.exports = router;
