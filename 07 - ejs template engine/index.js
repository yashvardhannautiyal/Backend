const express = require('express')
const app = express()
const port = 3000

//sets view engine as ejs
//other view engine - [pug, template engine handlebars, ejs]
app.set("view engine", "ejs");

/* app.get('/', (req, res) => {
// responds the html file on root "/"
 res.sendFile("templates/index.html", {root: __dirname})
 })
*/


app.get('/', (req, res) => {
let siteName = "addidas.com"
let searchText = "search now"
let arr = [1,2,3,4]
res.render("index", {siteName: siteName, searchText:searchText, arr})
})

app.get('/blog/:slug', (req, res) => {
let blogTitle = "adidas"
let vlogContent = "its a very good brand"
//res.render - renders a view template
res.render("blogpost", {blogTitle : blogTitle, vlogContent : vlogContent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})