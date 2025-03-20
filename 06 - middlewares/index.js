const express = require('express')
const app = express()
const port = 3000
const fs = require("fs");

//middleware : is a function that is run before any request
// it has (req, res, next) object and to send the objects
//can modify request, send response and move to next middleware
//order of middleware is important 
//middleware follows FIFO(first in firt out) policy of execution
// app.use(express.static("public"))
//types : 
// application middleware - app.use(() =>{})
// routing middleware  - router specific middleware
// error handling middleware 
// built in middleware - expres.static(), express.json(), etc
// third party middleware - install middleware and use it in app   

//basic syntax of a middleware
//middleware 1
app.use((req,res,next) =>{
    fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}`);
    req.harry = "i am harry bhai"
    console.log(`${Date.now()} is a ${req.method}`)
    next();
})
//middleware 2
app.use((req,res,next) =>{
    console.log("middleware2")
    next();
})

app.get('/', (req, res) => {
  res.send('Hello World, we are learning middlewares in express!' + req.harry)
})
app.get('/about', (req, res) => {
  res.send('Hello about!' + req.harry);
})
app.get('/contact', (req, res) => {
  res.send('Hello contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})