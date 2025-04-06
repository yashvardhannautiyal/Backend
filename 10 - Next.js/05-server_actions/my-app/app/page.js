"use client"
import {submitAction} from "./actions/form";
import { useRef } from "react";

export default function Home() {
  
  let ref = useRef()
  
  return (
    <div>
      <form ref = {ref} action={(e) => {submitAction(e); 
        ref.current.reset()}
      }>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" className="bg-white text-black"/>
        </div>
        <div>
        <label htmlFor="address">Address</label>
        <input type="text" name="address" id="address" className="bg-white text-black"/>
        </div>
        <div>
          <button className="border border-white">Submit</button>
        </div>
      </form>
    </div>
  );
}
