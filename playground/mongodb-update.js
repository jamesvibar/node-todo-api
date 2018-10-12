const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  { useNewUrlParser: true },
  (err, client) => {
    if (err) return console.log("Unable to connect to MongoDB server...");
    console.log("Connected to MongoDB.");

    const db = client.db("TodoApp");

    db.collection("Users")
      .findOneAndUpdate(
        {
          _id: new ObjectID("5bbfad317607e92e8ce3a46d")
        },
        {
          $set: {
            name: "Shaina Mae L. Vibar"
          },
          $inc: {
            age: -1
          }
        },
        {
          returnOriginal: false
        }
      )
      .then(
        res => console.log(JSON.stringify(res.value, undefined, 2)),
        e => console.log(e)
      );

    // client.close();
  }
);
