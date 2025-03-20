import path from "path"
// console.log(path);

const myPath = "D:\\WEB DEV\\6. cwh MERN\\03 - file modules\\harry.txt"
//.extname : tells the extension name
console.log(path.extname(myPath))

//dirname - gives the directory name
console.log(path.dirname(myPath))

//basename - gives the filename
console.log(path.basename(myPath))

