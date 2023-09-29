const mongo = require("mongodb");
const data1 = {
  Name: "Duraid",
  Class: "Ninth",
  Smart: true,
  Work: "Full Stack Web Developer",
};
const uri = "mongodb://127.0.0.1:27017";
const client = new mongo.MongoClient(uri);
(async () => {
  await client.connect();
  const db = client.db("school");
  const students = db.collection("students");
  const data = await students.insertOne(data1);
  console.log(data);
})()
  .then(() => {
    console.log("Then runned");
  })
  .catch(() => {
    console.log("Error");
  })
  .finally(() => {
    client.close();
  });
