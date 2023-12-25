import React from "react";
import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("Login_Token", response.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
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
  );
};

export default Login;
