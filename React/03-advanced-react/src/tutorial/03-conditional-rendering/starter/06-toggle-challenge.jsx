import { useState } from "react";

const ToggleChallenge = () => {
  const [bool, setBool] = useState(false);
  const fire = () => {
    if (bool) {
      setBool(false);
    } else {
      setBool(true);
    }
  };

  return (
    <>
      <h1>{bool && "True"}</h1>
      <button
        onClick={fire}
        className='btn'>
        Click Me
      </button>
    </>
  );
};

export default ToggleChallenge;
