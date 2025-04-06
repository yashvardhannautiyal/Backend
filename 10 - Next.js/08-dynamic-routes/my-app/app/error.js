"use client"

import {useEffect} from 'react'

export default function Error({error,reset}){
    useEffect(() =>{
        console.log(error)
    }, [error])
  return (
    <div>
      <h2>error aa gaya bhai</h2>
      {/* attempt to recover the error by re-rendering the segment  */}
      <button onClick = {() => reset()}>Try again</button>
    </div>
  )
}
