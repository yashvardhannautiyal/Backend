import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/ToDo.models.js";

//click on mongodb -> localhost connection -> right click -> copy connection string : (mongodb://localhost:27017/)
let conn = await mongoose.connect("mongodb://localhost:27017/");
const app = express();
const port = 3001;

/*
app.get("/", (req, res) => {
    //insert data in model
    //this will insert this data in database in mongodb document
    //we can check in mongodb for the data saved and whenever we restart the app the data will insert again
    // const todo = new Todo({title : "first todo", description: "this is the first todo", isDone: true}) 
    const todo = new Todo({title : 1, description: "this is the first todo", isDone: true, days: 3}) //if i give number as input it will store as string as the datatype is string to be entered by user
    //saving the data
    todo.save()
  res.send("hello world2");
});

*/


app.get("/aa", async (req, res) => {
    
    let todo = await Todo.findOne({})
  res.json({todo: todo.title, description : todo.description})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
