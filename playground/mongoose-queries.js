const { ObjectID } = require("mongodb");
const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

const id = "5bc022944d871a2388e7c5ad";

if (!ObjectID.isValid(id)) {
  console.log("ID is not valid!");
}

// Todo.find({ _id: id }).then(todos => {
//   console.log("Todos", todos);
// });

// Todo.findOne({ _id: id }).then(todo => {
//   console.log("Todo", todo);
// });

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) return console.log("Id not found");
//     console.log("Todo by Id", todo);
//   })
//   .catch(e => console.log(e));

User.findById("5bbff4c2232d2722b037c6c4")
  .then(user => {
    if (!user) return console.log("ID is not found!");
    console.log("User by Id", user);
  })
  .catch(e => console.log(e));
