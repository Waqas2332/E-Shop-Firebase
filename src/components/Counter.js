import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Hello ");
    console.log(count);
  }, []);
  function handleIncrement() {
    setCount((prevState) => prevState + 1);
  }
  function handleDecrement() {
    setCount((prevCount) => {
      return prevCount - 1;
    });
  }
  return (
    <div>
      <button onClick={handleIncrement}>+</button>
      <p>{count}</p>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default Counter;
