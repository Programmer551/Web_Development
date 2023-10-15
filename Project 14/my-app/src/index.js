import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import AudioPlayer from "./audio";
import Button from "./button";
const App = () => {
  return (
    <>
      <Button />
      {/* <AudioPlayer /> */}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
