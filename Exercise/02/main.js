const express = require("express")
const app = express()
const port = 3000

const mongoose = require('mongoose');
// mongodb://127.0.0.1:27017/company : [/company(database name)]

mongoose.connect('mongodb://localhost:27017/company');
const Employee = require("./models/Employee.models.js")

app.set("view engine", "ejs");

app.get("/", (req,res) =>{
    res.render("index", {foo : "foo"});
})

// random function 
const getRandom = (arr) =>{
    let ran = Math.floor(Math.random() *  (arr.length -1))
    return arr[ran]
}

app.get("/generate", async (req,res) =>{
//clear previous collection and there will be always 10 documents at a time 
await Employee.deleteMany({})

    //random data array
    let randomNames = ["harryy", "sharryy", "marryy"]
    let randomSalary = [1234, 2345, 4567]
    let randomLanguage = ["python", "js", "java", "c++"]
    let randomCity = ["meerut", "delhi", "firozabad"]
    let randomisManager = [true, false]

    for (let i = 0; i < 10; i++) {
        let e = await Employee.create({
            name: getRandom(randomNames),
            salary: getRandom(randomSalary),
            language: getRandom(randomLanguage),
            city: getRandom(randomCity),
            isManager: getRandom(randomisManager),
        })        
    }
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port} `)
})