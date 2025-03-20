//asynchronous file operations eg: readdir
import fs from "fs/promises";

//synchronous file operations eg: existsSync()
import fsn from "fs";

//handling and manipulating file paths
import path from "path";

//path of all the files - directory
const basePath = "D:\\WEB DEV\\6. cwh MERN\\Exercise\\01";

//reads the file from the directory
let files = await fs.readdir(basePath);
//outputs array of files in directory
console.log(files);


// for of loop -  iterates through each file in the files array.
for (const item of files) {

  //Splits the filename at each dot (.) and retrieves the last element, which is the file extension (eg: image1.img -> "img")
  let ext = item.split(".")[item.split(".").length - 1];

  //If the file is not a JavaScript (.js) or JSON (.json) file, proceed.
  //item.split(".").length > 1 ensures the file actually has an extension.
  if (ext != "js" && ext != "json" && item.split(".").length > 1) {

    //checks if a directory already exists for this file extension.
    //If the folder exists, move the file into it.
    if (fsn.existsSync(path.join(basePath, ext))) {

      //Moves the file into its respective folder using fs.rename(oldPath, newPath)
      fs.rename(path.join(basePath, item), path.join(basePath, ext, item));
    } else {

      //If the folder does not exist, create it using fs.mkdir(ext).
      fs.mkdir(ext);

      // After creating the folder, move the file into it
      fs.rename(path.join(basePath, item), path.join(basePath, ext, item));
    }
  }
}
