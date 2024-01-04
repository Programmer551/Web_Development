"use client";
import React from "react";

const Client = () => {
  const [num, setNum] = React.useState(1);
  const fire = () => {
    setNum(num + 1);
  };
  return (
    <>
      <h1 className='text-4xl'>{num}</h1>
      <button
        className='btn btn-primary text-lg text-center'
        onClick={fire}>
        Click me
      </button>
    </>
  );
};
export default Client;
