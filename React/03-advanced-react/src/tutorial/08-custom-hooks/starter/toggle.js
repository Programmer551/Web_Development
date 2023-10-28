import { useState } from "react";

const toggle = (value) => {
  const [show, setShow] = useState(value);
  const tog = () => {
    setShow(!show);
  };
  return { tog, show };
};
export default toggle;
