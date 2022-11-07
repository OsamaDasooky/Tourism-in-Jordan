import React, { useEffect, useState } from "react";

function UseEffect({ stateFromApp, onClick }) {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log(count, count2, stateFromApp);
  }, []); // <- add empty brackets here

  useEffect(() => {
    console.log(" this from second useEffect");
  }, [count, stateFromApp]); // <- add empty brackets here

  // console.log(useState(0));
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <p>you clicked {count}times</p>
      <p>you clicked {count2}times</p>
      <p>you clicked {stateFromApp}times - state in app </p>

      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setCount2(count2 + 1)}>Click me2</button>
      <button onClick={() => onClick(stateFromApp + 1)}>
        {/* onClick(stateFromApp + 1) === handleClickFromHeader(stateFromApp + 1) */}
        Click to change state in app
      </button>
    </div>
  );
}

export default UseEffect;
