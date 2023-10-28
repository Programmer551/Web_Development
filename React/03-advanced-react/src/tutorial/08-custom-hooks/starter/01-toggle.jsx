import { useState } from "react";
import toggle from "./toggle";

const ToggleExample = () => {
  const { show, tog } = toggle(true);
  return (
    <div>
      <h4>toggle custom hook</h4>
      <button
        className='btn'
        onClick={tog}>
        toggle
      </button>
      {show && <h4>some stuff</h4>}
    </div>
  );
};
export default ToggleExample;
