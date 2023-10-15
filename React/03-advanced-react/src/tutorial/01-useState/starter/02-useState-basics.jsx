import { useState } from "react";
const UseStateBasics = () => {
  // const value = useState("Duraid")[0];
  // const value2 = useState("Shahmeer")[1];
  // console.log(value);
  // console.log(value2);
  let [count, setCount] = useState(0);

  const event = () => {
    setCount(++count);
  };

  return (
    <div className='container'>
      <h1>You clicked {count} times</h1>
      <button
        className='btn'
        onClick={event}>
        Click ME
      </button>
    </div>
  );
};

export default UseStateBasics;
