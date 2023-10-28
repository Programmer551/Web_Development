import { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const fire1 = (e) => {
    setName(e.target.value);
    // console.log(name);
  };
  const fire2 = (e) => {
    setEmail(e.target.value);
    // console.log(email);
  };
  const submit = (e) => {
    e.preventDefault();
    console.log(name, email);
  };
  return (
    <form
      className='form'
      onClick={submit}>
      <h4>controlled inputs</h4>
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
          onChange={fire1}
          value={name}
        />
      </div>
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
          onChange={fire2}
          value={email}
        />
      </div>
      <button
        type='submit'
        className='btn btn-block'>
        submit
      </button>
    </form>
  );
};
export default ControlledInputs;
