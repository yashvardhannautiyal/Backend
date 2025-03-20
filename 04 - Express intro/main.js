const express = require('express')
const app = express()
const port = 3000

//static files - make public folder and put files in it - this will be served on the page
//localhost:3000/harry.txt - eg
//this is used to serve files to public and only these files are served other files(backend code is hidden from everyone)
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('about us!')
})
app.get('/contact', (req, res) => {
  res.send('Hello  contact!')
})
app.get('/blog', (req, res) => {
  res.send('blog page!')
})
//params : url location /blog/intro-to-js (here we can give any /location and it will be stored as parameter in param : {}  either the fact it exists or not)
app.get('/blog/:slug/:second', (req, res) => {
    //for: http://localhost:3000/blog/intro-to-jason/second-param?mode=dark&region=in
    console.log(req.params);//output - { slug: 'intro-to-jason', second: 'second-param' }
    console.log(req.query)//output - { mode: 'dark', region: 'in' }
  res.send(`blog page! : ${req.params.slug} and ${req.params.second}`);

})


//queries: http://localhost:3000/blog/intro-to-jason/second-param?mode=dark&region=in
//used to send data in the url and this is stored in query{}


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})