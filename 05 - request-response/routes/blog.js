const express = require ("express");
const router = express.Router();

//define home page route
router.get("/", (req,res) =>{
    res.send("this is blog router page1")
})

router.get("/blogpost/:slug", (req,res) =>{
    res.send(`fetch blogpost for ${req.params.slug}`)
})

module.exports = router;