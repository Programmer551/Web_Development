import React, { useReducer } from "react";
import { data } from "../../../data";

const DefaultState = {
  people: data,
};
const reducer = (state, action) => {
  if (action.type == "Clear List") {
    return { ...state, people: [] };
  }
};
const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, DefaultState);
  // console.log(state);
  // const { people } = state;
  // const [people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };
  const reset = () => {
    // setPeople(data);
  };
  const clearList = () => {
    dispatch({
      type: "Clear List",
    });
  };
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div
            key={id}
            className='item'>
            <h4>{name}</h4>
            <button
              onClick={() => removeItem(id)}
              className='btn'
              style={{ background: "red" }}>
              remove
            </button>
          </div>
        );
      })}
      {state.people.length == 0 ? (
        <button
          onClick={reset}
          className='btn'>
          Reset
        </button>
      ) : (
        <button
          className='btn'
          style={{ marginTop: "2rem" }}
          onClick={clearList}>
          clear items
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
