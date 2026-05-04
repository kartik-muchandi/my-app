import React, { useState } from 'react'

export default function Name() {
    // let user = "Kartik";

    let [user, setName] = useState("kartik")
    const change = () => {
        setName(user === "kartik"? "pankaj" : "kartik");
    }
  return (
    <div>
       <h1>Hello {user}</h1>
       <button onClick={change}>Change name</button>
    </div>
  )
}
