import fs from "fs/promises"

//readFile - reads from the file
let a = await fs.readFile("harry.txt");


//fs.writeFile - writes content in the file path
// let b = await fs.writeFile("harry.txt", "\n\n\n\n\t harry is harry")
let c = await fs.appendFile("harry.txt", "\n\n\n\n\t harry is harryiehawirug")

console.log(a.toString(), b, c)
