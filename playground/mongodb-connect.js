const { MongoClient, ObjectID } = require("mongodb");

const obj = new ObjectID();
console.log(obj);

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  { useNewUrlParser: true },
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to MongoDBD server");
    }
    console.log("Connected to Mongo DB Server");
    const db = client.db("TodoApp");

    // Insert new document to Users Collection
    // Properties: Name, Age, Location

    // db.collection("Users").insertOne(
    //   {
    //     name: "James Vibar",
    //     age: 21,
    //     location: "Imus, Cavite"
    //   },
    //   (err, res) => {
    //     if (err) return console.log("Unable to insert to Users database.");
    //     console.log(
    //       JSON.stringify(res.ops[0]._id.getTimestamp(), undefined, 2)
    //     );
    //   }
    // );

    client.close();
  }
);
