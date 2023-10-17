import React, { useState } from "react";
let a = 0;
const UseStateGotcha = () => {
  let [value, setValue] = useState(a);
  const fire = () => {
    // setValue((currunt) => {
    //   return currunt + 1;
    // });
    setTimeout(() => {
      setValue((currunt) => {
        return currunt + 1;
      });
    }, 2000);
  };
  return (
    <div className='container'>
      <h1>{value}</h1>
      <button
        onClick={fire}
        className='btn'>
        Click ME
      </button>
    </div>
  );
};

export default UseStateGotcha;
