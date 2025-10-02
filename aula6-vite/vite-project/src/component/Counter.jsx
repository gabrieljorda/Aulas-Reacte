import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount((count) => count + 1);
  }
  function decrement() {
    setCount((count) => count - 1);
  }
  function reset() {
    setCount(0);
  }
  return (
    <div>
      {" "}
      <h1>Contador: {count}</h1>{" "}
      <button onClick={increment}>Incrementar</button>{" "}
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>Decrementar</button>{" "}
    </div>
  );
}

export default Counter;
