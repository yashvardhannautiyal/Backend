// "use client"
// import {useState, useEffect} from "react"
import fs from "fs/promises"

export default function Home() {
  // const [count, setCount] = useState(0);
  console.log("hey this is console")
  let a = fs.readFile(".gitIgnore")
  a.then(e => {console.log(e.toString())})
  return (
    <>
    <div>
      {/* i am a component {count}
      <button onClick={() => setCount(count + 1)}>Click</button> */}
    </div>
    </>
  );
}
