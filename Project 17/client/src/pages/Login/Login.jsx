import React from "react";
import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='email'
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type='password'
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <input
        type='submit'
        value='Submit'
      />
    </form>
  );
};

export default Login;
