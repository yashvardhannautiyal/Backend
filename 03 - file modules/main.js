// The fs module enables interacting with the file system - it has various methods in it
const fs = require("fs")
// console.log(fs)

console.log("starting")
//creates a file and gives content to it
// fs.writeFileSync("harry.txt", "harry is a good boy")

//always use writeFile() as writeFileSync my create problem many times
fs.writeFile("harry2.txt","harry is goodest boy", () => {
    console.log("done")
    fs.readFile("harry2.txt", (error, data) => {
        console.log(error, data.toString())

        // again - this creates a callback hell
       /* fs.writeFile("harry2.txt","harry is goodest boy", () => {
            console.log("done")
            fs.readFile("harry2.txt", (error, data) => {
                console.log(error, data.toString())
            })
                
        })    */
    })
})

// fs.appendFile - appends data in the same file again and again when the server is started again or run again
fs.appendFile("harry3.txt", "harryRobo" ,(e,d) => {
    console.log(d.toString())
})
console.log("ending")