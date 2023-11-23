import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");
  const send = (e) => {
    console.log(value);
    e.preventDefault();
    fetch("http://localhost:3000/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: value,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        // console.log(response);
      });
  };

  return (
    <>
      <ul>
        {setTimeout(() => {
          fetch("http://localhost:3000/all", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((response) => {
              return response.json();
            })
            .then((response) => {
              // setValue2(response);
              console.log(response);
              response.map((response) => {
                return <h1>{response.message}</h1>;
              });
            });
          // return <li>{response}</li>;
        }, 1000)}
      </ul>
      <form onSubmit={send}>
        <input
          type='text'
          onChange={(e) => setValue(e.target.value)}
        />
        <button type='submit'>Send</button>
      </form>
    </>
  );
}

export default App;
