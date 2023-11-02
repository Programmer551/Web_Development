const Person = ({ name, removePerson, id }) => {
  return (
    <div>
      <h4>{name}</h4>
      <button
        className='btn'
        style={{ background: "red" }}
        onClick={() => removePerson(id)}>
        Delete
      </button>
    </div>
  );
};
export default Person;
