import React from "react";
import { useState } from "react";
import { data } from "../../../data";
let a = 1;
const UseStateArray = () => {
  const [name, setname] = useState(data);
  const fire = (id) => {
    let newPeople = name.filter((person) => person.id !== id);
    setname(newPeople);
  };
  return (
    <>
      {name.map((data) => {
        const { id, name } = data;
        console.log(name);
        return (
          <div key={id}>
            <h2>{name}</h2>
            <button onClick={() => fire(id)}>Clear Item</button>
          </div>
        );
      })}
      <br />
      <button
        className='btn'
        onClick={() => setname([])}>
        Clear All
      </button>
    </>
  );
};

// const UseStateArray = () => {
//   const [people, setPeople] = React.useState(data);

//   return (
//     <div>
//       {people.map((person) => {
//         const { id, name } = person;
//         return (
//           <div
//             key={id}
//             className='item'>
//             <h4>{name}</h4>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
// console.log(data[0].name);
export default UseStateArray;
