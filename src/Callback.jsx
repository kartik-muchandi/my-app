import React, { useState, useCallback } from "react";
import Child from "./Child";


export default function Callback() {
  const [count, setCount] = useState(0);


  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);


  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>


      <Child onClick={handleClick} />
    </div>
  );
}