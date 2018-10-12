const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  { useNewUrlParser: true },
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to MongoDBD server");
    }
    console.log("Connected to Mongo DB Server");
    const db = client.db("TodoApp");

    db.collection("Users")
      .findOneAndDelete({ _id: new ObjectID("5bbfaef4b4058124f87c8c03") })
      .then(res => console.log(res));

    client.close();
  }
);
