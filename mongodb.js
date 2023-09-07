const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const dbname = "users";

async function getData() {
  let result = await client.connect();
  let db = result.db(dbname);
  return db.collection("user");
}
module.exports=getData;


