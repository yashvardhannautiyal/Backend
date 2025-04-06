//server actions must always be async
  //normally we use onClick function for submit button
  //but in next js we can do futher more 
  //we can write database access it and send requests in the same file
  //below code sneds a POST request to the server

  "use server" // use a client component as server component
  import fs from "fs/promises"

  export const submitAction = async(e) =>{
    
    console.log(e.get("name"), e.get("address") )
    fs.writeFile("harry.txt", `name is : ${e.get("name")} and address is : ${e.get("address")}`)
  }