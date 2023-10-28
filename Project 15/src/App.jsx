import { useEffect, useState } from "react";
import List from "./List";

const App = () => {
  let num = 1;
  const [name, setName] = useState();
  const [array, setArray] = useState([]);
  useEffect(() => {
    let data = localStorage.getItem("Array");

    if (data == null) {
      setArray([]);
    } else {
      data = JSON.parse(data);
      setArray(data);
    }

    console.log(data);
  }, []);

  const submit = (e) => {
    let newName = {
      name: name,
      id: num++,
    };
    // newName = JSON.stringify(newName);
    e.preventDefault();

    setArray(() => {
      let newArray = [...array, newName];
      let newArray2 = JSON.stringify(newArray);
      localStorage.setItem("Array", newArray2);
      return newArray;
    });
  };

  return (
    <div className='container center'>
      <h1 className='h1'>Todo App</h1>

      <form
        className='form center'
        onSubmit={submit}
        action=''>
        <input
          className='input form-control inline'
          type='text'
          onChange={(e) =>
            setName(() => {
              return e.target.value;
            })
          }
        />
        <input
          type='submit'
          className='submit btn btn-primary my-5'
        />
      </form>
      <ol className='list'>
        {array.map((element) => {
          // let newElement = JSON.parse(element);
          const { name, id } = element;
          // const Arr = localStorage.getItem("Array");
          return (
            <List
              key={Math.random()}
              name={name}
              id={id}
              array={array}
              element={element}
              setArray={setArray}
            />
          );
        })}
      </ol>
    </div>
  );
};
export default App;
