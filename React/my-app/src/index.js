import React from "react";
import ReactDOM from "react-dom/client";
// Correct Method

const Greeting = () => {
  return (
    <>
      <div className='hello'>
        <h1>First React Component</h1>
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        ratione explicabo omnis aliquid hic obcaecati, dolore quia assumenda
        beatae in soluta laboriosam.
      </div>
      <hr />
    </>
  );
};

// Wrong Method

// const Greeting = () => {
//   return React.createElement("h1", {}, "Hello World");
// };
// function Greeting() {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Hello World")
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting />);
