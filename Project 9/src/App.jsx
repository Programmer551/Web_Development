import { useState } from "react";
import "./style.css";
const App = () => {
  const [value, setValue] = useState("");
  const fire = (event) => {
    console.log(event.target.value);
    setValue(() => {
      let data = event.target.value;
      return value + data;
    });
  };
  const clear = () => {
    setValue("");
  };
  const evaluate = () => {
    try {
      let data = eval(value);
      setValue(data);
    } catch (error) {
      setValue("This is not Proper Syntax");
    }
  };
  const backspace = () => {
    setValue(() => {
      let data = value.slice(0, value.length - 1);
      return data;
    });
  };
  return (
    <div className='container'>
      <input
        type='text'
        value={value}
        className='input'
        readOnly
      />
      <div className='calculator'>
        <button
          className='btn btn-primary'
          onClick={fire}
          value={"1"}>
          1
        </button>
        <button
          className='btn btn-primary'
          onClick={fire}
          value={"2"}>
          2
        </button>
        <button
          className='btn btn-primary'
          onClick={fire}
          value={"3"}>
          3
        </button>
        <button
          className='btn btn-primary'
          onClick={fire}
          value={"4"}>
          4
        </button>
        <button
          className='btn btn-primary'
          onClick={fire}
          value={"5"}>
          5
        </button>
        <button
          className='btn btn-primary'
          onClick={fire}
          value={"6"}>
          6
        </button>
        <button
          className='btn btn-primary'
          onClick={fire}
          value={"7"}>
          7
        </button>
        <button
          className='btn btn-primary'
          onClick={fire}
          value={"8"}>
          8
        </button>
        <button
          className='btn btn-primary'
          onClick={fire}
          value={"9"}>
          9
        </button>
        <button
          className='btn btn-primary'
          onClick={fire}
          value={"0"}>
          0
        </button>
        <button
          className='btn btn-primary'
          onClick={fire}
          value={"+"}>
          +
        </button>
        <button
          className='btn btn-primary'
          onClick={fire}
          value={"-"}>
          -
        </button>
        <button
          className='btn btn-primary'
          onClick={fire}
          value={"*"}>
          *
        </button>
        <button
          className='btn btn-primary'
          onClick={fire}
          value={"/"}>
          /
        </button>
        <button
          className='btn btn-primary'
          onClick={fire}
          value={"."}>
          .
        </button>
        <button
          className='btn btn-primary'
          onClick={clear}>
          C
        </button>
        <button
          className='btn btn-primary'
          onClick={evaluate}>
          =
        </button>

        <button
          className='btn btn-primary'
          onClick={backspace}>
          &lt;=
        </button>
      </div>
    </div>
  );
};

export default App;
