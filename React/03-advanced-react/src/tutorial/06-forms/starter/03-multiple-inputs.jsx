import { useState } from "react";

const MultipleInputs = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const change = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div>
      <form
        className='form'
        onSubmit={submit}>
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className='form-row'>
          <label
            htmlFor='name'
            className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            onChange={change}
            value={data.name}
            name='name'
          />
        </div>
        {/* email */}
        <div className='form-row'>
          <label
            htmlFor='email'
            className='form-label'>
            Email
          </label>
          <input
            type='email'
            className='form-input'
            id='email'
            onChange={change}
            value={data.email}
            name='email'
          />
        </div>
        {/* email */}
        <div className='form-row'>
          <label
            htmlFor='password'
            className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-input'
            id='password'
            onChange={change}
            value={data.password}
            name='password'
          />
        </div>

        <button
          type='submit'
          className='btn btn-block'>
          submit
        </button>
      </form>
    </div>
  );
};
export default MultipleInputs;
