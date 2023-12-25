import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const user = JSON.parse(sessionStorage.getItem("User"));

  return (
    <form
      style={{ display: "flex", flexDirection: "column", width: "30vw" }}
      onSubmit={async (e) => {
        e.preventDefault();
        // console.log(name, email, message);
        const response = await fetch("http://localhost:3000/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: user.user.UserData.name,
            email: user.user.UserData.email,
            message,
          }),
        });
        const data = await response.json();
        console.log(data);
      }}>
      <input
        type='text'
        value={user.user.UserData.name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type='email'
        value={user.user.UserData.email}
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
