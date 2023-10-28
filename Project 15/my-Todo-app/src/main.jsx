// import { Items } from "./files/items";
import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
let num = 1;
import { useState } from "react";
const App = () => {
  const [name, setName] = useState();
  const [array, setArray] = useState([]);
  const submit = (e) => {
    let newName = {
      name: name,
      id: num++,
    };
    e.preventDefault();
    // console.log(name);
    setArray(() => {
      return [...array, newName];
    });
    // console.log(array);
  };
  return (
    <div className='container center'>
      <h1 className='h1'>Todo App</h1>

      <form
        className='form'
        onSubmit={submit}
        action=''>
        <input
          className='input form-control'
          type='text'
          onChange={(e) =>
            setName(() => {
              return e.target.value;
            })
          }
        />
        <input
          type='submit'
          className='submit'
        />
      </form>
      <ol className='list'>
        {array.map((element) => {
          const { name, id } = element;
          return (
            <div
              className='list'
              key={Math.random()}
              id={id}>
              <li
                className='li inline'
                key={Math.random()}>
                {name}
              </li>
              <button
                key={Math.random()}
                onClick={() => {
                  //   const item = array.find((element) => id == id);
                  console.log(element);

                  const newArray = array.filter((item) => item !== element);
                  setArray(newArray);
                  console.log(array);
                }}>
                Delete
              </button>
            </div>
          );
        })}
      </ol>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
