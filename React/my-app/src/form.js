import React from "react";
import ReactDOM from "react-dom/client";

const Form = () => {
  return (
    <>
      <h1>Form</h1>
      <form
        action='http://localhost:5000/submit'
        method='POST'>
        <input
          type='text'
          name='name'
          id='name'
        />
        <br />
        <input
          type='number'
          name='number'
          id='number'
        />
        <input
          type='submit'
          value='Submit'
        />
        <input
          type='reset'
          value='Reset'
        />
      </form>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Form />);
