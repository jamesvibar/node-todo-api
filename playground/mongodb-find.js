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

    // db.collection("Todos")
    //   .find({ })
    //   .toArray()
    //   .then(
    //     docs => {
    //       console.log("Todos");
    //       console.log(JSON.stringify(docs, undefined, 2));
    //     },
    //     e => {
    //       console.log("Unable to fetch Todos", e);
    //     }
    //   );

    // db.collection("Todos")
    //   .find()
    //   .count()
    //   .then(
    //     count => {
    //       console.log("Todos");
    //       console.log(`Todos count: ${count}`);
    //     },
    //     e => {
    //       console.log("Unable to fetch Todos", e);
    //     }
    //   );

    db.collection("Users")
      .find({ name: "James Vibar" })
      .toArray()
      .then(
        docs => {
          console.log(JSON.stringify(docs, undefined, 2));
        },
        e => {
          console.log(e);
        }
      );

    // client.close();
  }
);
