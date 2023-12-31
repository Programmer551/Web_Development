import { useState, useTransition } from "react";
const LatestReact = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const [isPending, Done] = useTransition();
  const handleChange = (e) => {
    setText(e.target.value);
    Done(() => {
      const newItems = Array.from({ length: 5000 }, (_, index) => {
        return (
          <div key={index}>
            <img
              src='/vite.svg'
              alt=''
            />
          </div>
        );
      });
      setItems(newItems);
    });
    // slow down CPU
  };
  return (
    <section>
      <form className='form'>
        <input
          type='text'
          className='form-input'
          value={text}
          onChange={handleChange}
        />
      </form>
      <h4>Items Below</h4>
      {isPending ? (
        <h1>Loading....</h1>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            marginTop: "2rem",
          }}>
          {items}
        </div>
      )}
    </section>
  );
};
export default LatestReact;
