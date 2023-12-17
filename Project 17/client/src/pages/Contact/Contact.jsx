import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <form
      style={{ display: "flex", "flexDirection": "column", width: "30vw" }}
      onSubmit={(e) => {
        e.preventDefault();
        console.log(name, email, message);
      }}>
      <input
        type='text'
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type='email'
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <textarea
        cols='30'
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        rows='10'></textarea>
      <input
        type='submit'
        value='Submit'
      />
    </form>
  );
};

export default Contact;
