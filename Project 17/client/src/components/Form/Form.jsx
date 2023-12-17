import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(name, email, phone, password);
        }}>
        <input
          type='text'
          placeholder='Enter your name'
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type='text'
          placeholder='Enter your phone number'
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <input
          type='email'
          placeholder='Enter your email address'
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type='password'
          placeholder='Enter your password'
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type='submit'
          value='Submit'
        />
      </form>
    </>
  );
};

export default Form;
