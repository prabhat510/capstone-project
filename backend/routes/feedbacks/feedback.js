const mongodb = require("mongodb");
const router = require("express").Router();
const authVerify = require("../auth/authVerify");
const mongoClient = mongodb.MongoClient;

router.get("/display", authVerify, async (req, res) => {
  const client = await mongoClient.connect(process.env.DB_CONNECT);
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
module.exports = router;
