const List = ({ id, name, array, element, setArray }) => {
  // console.log(localStorage.getItem("Array"));
  // let arr = JSON.parse(element);
  return (
    <div
      className='list alert alert-info'
      key={Math.random()}
      id={id}>
      <li
        className='li inline'
        key={Math.random()}>
        {name}
      </li>
      <button
        className='btn btn-danger'
        key={Math.random()}
        onClick={() => {
          console.log(element);

          let newArray = array.filter((item) => item !== element);
          setArray(newArray);
          newArray = JSON.stringify(newArray);
          localStorage.setItem("Array", newArray);
          console.log(array);
        }}>
        Delete
      </button>
    </div>
  );
};
export default List;
