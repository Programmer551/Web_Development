import React, { useReducer } from "react";
import { data } from "../../../data";
const Clear_List = "Clear_List";
const Remove_Item = "Remove_Item";
const Reset_List = "Reset_List";
const DefaultState = {
  people: data,
};
const reducer = (state, action) => {
  if (action.type == Clear_List) {
    return { ...state, people: [] };
  }
  if (action.type == Remove_Item) {
    console.log(state);
    let newPeople = state.people.filter((person) => person.id !== action.id);
    return { people: newPeople };
  }
  if (action.type == Reset_List) {
    console.log(action);
    return { people: data };
  }
  return state;
};
const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, DefaultState);

  const removeItem = (id) => {
    dispatch({
      type: Remove_Item,
      id: id,
    });
  };
  const reset = () => {
    dispatch({
      type: Reset_List,
    });
  };
  const clearList = () => {
    dispatch({
      type: Clear_List,
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
