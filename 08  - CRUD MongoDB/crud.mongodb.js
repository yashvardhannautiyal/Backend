//USE
use("crudDb");

/*
//CREATE
db.createCollection("courses")

//INSERT-ONE
db.courses.insertOne(
    {
        name : "harrys web dev",
        price : 0,
        assignments: 24,
        projects: 45
    }
)

//INSERT-MANY
db.courses.insertMany(
    [
        {
          "name": "harrys web dev",
          "price": 0,
          "assignments": 24,
          "projects": 45
        },
        {
          "name": "fullstack mastery",
          "price": 99,
          "assignments": 30,
          "projects": 50
        },
        {
          "name": "javascript basics",
          "price": 20,
          "assignments": 15,
          "projects": 10
        },
        {
          "name": "react pro course",
          "price": 120,
          "assignments": 40,
          "projects": 35
        },
        {
          "name": "html & css crash course",
          "price": 10,
          "assignments": 12,
          "projects": 8
        },
        {
          "name": "backend with node.js",
          "price": 80,
          "assignments": 25,
          "projects": 20
        },
        {
          "name": "python for beginners",
          "price": 30,
          "assignments": 18,
          "projects": 12
        },
        {
          "name": "data structures & algorithms",
          "price": 150,
          "assignments": 50,
          "projects": 40
        },
        {
          "name": "java enterprise edition",
          "price": 110,
          "assignments": 35,
          "projects": 25
        },
        {
          "name": "flutter app development",
          "price": 90,
          "assignments": 28,
          "projects": 18
        }
      ]
      
)


//READ
let a = db.courses.find({price : 0})
// console.log(a); - gives all the documents with price:0
console.log(a.count())//gives number of documents having price:0

console.log(a.toArray());

let b = db.courses.findOne({price : 0})
console.log(b)


*/

/*
//UPDATE
//updateOne : updates first document
db.courses.updateOne({price : 0}, {$set:{price: 1000}})

//udateMany : updates all the document
db.courses.updateMany({price : 0}, {$set:{price: 1000}})

*/

//DELETE
//deleteOne
db.courses.deleteOne({price:1000})
//deleteMany
db.courses.deleteOne({price:1000})


