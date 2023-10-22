import { useEffect } from "react";
import { useState } from "react";
const True = () => {
  useEffect(() => {
    const id = setInterval(() => {
      console.log("Hello From interval");
    }, 1000);
    console.log("Run");
    return () => {
      clearInterval(id);
    };
  }, []);
  return <h1>True</h1>;
};
const CleanupFunction = () => {
  const [bool, setBool] = useState(false);
  const fire = () => {
    if (bool) {
      setBool(false);
    } else {
      setBool(true);
    }
  };

  return (
    <div>
      {bool && <True />}
      <button
        className='btn'
        onClick={fire}>
        Toggle
      </button>
    </div>
  );
};

export default CleanupFunction;
