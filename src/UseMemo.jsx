import React, { useState, useMemo } from "react";



export default function UseMemo() {

  const [count, setCount] = useState(0);

  const [text, setText] = useState("");



  // Expensive calculation

  const expensiveCalculation = (num) => {

    console.log("Calculating...");

    for (let i = 0; i < 1000000000; i++) {} // heavy loop

    return num * 2;

  };



  const result = useMemo(() => {

    return expensiveCalculation(count);

  }, [count]);



  return (

    <div>

      <h2>Count: {count}</h2>

      <h3>Result: {result}</h3>



      <button onClick={() => setCount(count + 1)}>

        Increment Count

      </button>



      <input

        type="text"

        value={text}

        onChange={(e) => setText(e.target.value)}

        placeholder="Type something"

      />

    </div>

  );

}
