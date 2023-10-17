import { useState } from "react";
const data = [
  { name: "Duraid", Hobby: "Reading Books", age: "14" },
  { name: "Shahmeer", Hobby: "Play Snake Game", age: "13" },
];
let a = 0;
const UseStateObject = () => {
  const [value, setValue] = useState(data[a]);
  const fire = () => {
    setValue(data[++a]);
  };
  return (
    <>
      <h1>{value.name}</h1>
      <h1>{value.age}</h1>
      <h1>{`Hobby: ${value.Hobby}`}</h1>
      <button
        className='btn'
        onClick={fire}>
        Next
      </button>
    </>
  );
};

export default UseStateObject;
