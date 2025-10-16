import React from 'react'
import { useState } from "react"
const State = () => {
    //hooks must be outside return only html tag inside return
    //used while rendering so that value does not change
    const [count,setCount]=useState(0)
    const [like,setLike]=useState(0)
    const [dislike,setDislike]=useState(0)
  return (
    <div>
      <h1>useState example</h1>
      <h2>Count:{count}
      </h2>
      <button onClick={()=>setCount(prev=>prev+1)}>Increase</button>
      <button onClick={()=>setLike(l=>l+1)}>Like{like}</button>
      <button onClick={()=>setDislike(d=>d+1)}>Dislike{dislike}</button>
    </div>
  )
}

export default State
