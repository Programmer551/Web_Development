import { useState } from "react";
const frameworks = ["react", "angular", "vue", "svelte"];
const OtherInputs = () => {
  const [ship, setShip] = useState(false);
  const [frame, setFrame] = useState("react");
  const handle = (e) => {
    console.log(e.target.checked);
    setShip(e.target.checked);
  };
  const framework = (e) => {
    console.log(e.target);
    setFrame(e.target.value);
  };
  return (
    <div>
      <form className='form'>
        <h4>Other Inputs</h4>
        {/* name */}
        <div
          className='form-row'
          style={{ textAlign: "left" }}>
          <label htmlFor='shipping'> Free Shipping </label>
          <input
            type='checkbox'
            name=''
            id='shipping'
            checked={ship}
            onChange={handle}
          />
        </div>
        <div
          className='form-row'
          style={{ textAlign: "left" }}>
          <label
            htmlFor='framework'
            className='form-label'>
            Framework
          </label>
          <select
            name='framework'
            id='framework'
            value={frame}
            onChange={framework}>
            {frameworks.map((framework) => {
              return <option key={framework}>{framework}</option>;
            })}
          </select>
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
export default OtherInputs;