import React, { useEffect,useState } from 'react'

export default function Counter() {
    let [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1)
        },1000);
    });

  return (
    <div>
      <h1>{count}....</h1>


      {/* <button onClick = {() => setCount(count + 1)}> + </button>
      <button onClick = {() => setCount(count - 1)}> -</button>
      <button onClick = {() => setCount(0)}> reset </button> */}

    </div>
  )
}
