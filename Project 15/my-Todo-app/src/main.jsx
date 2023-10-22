// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";

// const App = () => {
//   const [name, setName] = useState("");

//   return (
//     <>
//       <h1>Todo App</h1>

//       <form
//         action=''
//         onSubmit={(event) => {
//           event.preventDefault();
//           console.log(name);
//           return <h1>{name}</h1>;
//         }}>
//         <input
//           type='text'
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input type='submit' />
//       </form>
//     </>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const [name, setName] = useState("");
  const [submittedName, setSubmittedName] = useState(""); // New state for the submitted value

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedName(name); // Update the submittedName state
    setName(""); // Clear the input field
  };

  return (
    <>
      <h1>Todo App</h1>

      <form
        action=''
        onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type='submit' />
      </form>

      {submittedName && <h1>Submitted Value: {submittedName}</h1>}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
