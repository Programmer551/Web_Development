import { useEffect, useRef, useState } from "react";

const UseRefBasics = () => {
  const [value, setValue] = useState(0);
  const container = useRef(null);
  const mounted = useRef(false);
  useEffect(() => {
    container.current.focus();
  });
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    console.log("Re-Render");
    // console.log(container);
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(container.current.value);
  };

  return (
    <div>
      <form
        className='form'
        onSubmit={handleSubmit}>
        <div className='form-row'>
          <label
            htmlFor='name'
            className='form-label'>
            Name
          </label>
          <input
            type='text'
            id='name'
            className='form-input'
            ref={container}
          />
        </div>
        <button
          type='submit'
          className='btn btn-block'>
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button
        onClick={() => setValue(value + 1)}
        className='btn'>
        increase
      </button>
    </div>
  );
};

export default UseRefBasics;
