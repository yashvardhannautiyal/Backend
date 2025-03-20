const express = require('express')
const blog = require("./routes/blog.js")
const app = express()
const port = 4000

app.use(express.static("public"));

app.use("/blog", blog);

app.get('/', (req, res) => {
    console.log("hey it's a get request")
  res.send('Hello World! this is get request')
})
app.post('/', (req, res) => {
    console.log("hey it's a post request")
  res.send('Hello World! this is post request')
})

app.get("/index", (req,res) =>{
  console.log("hey index.html is rendering ")
  res.sendFile('templates/index.html', {root : __dirname});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})