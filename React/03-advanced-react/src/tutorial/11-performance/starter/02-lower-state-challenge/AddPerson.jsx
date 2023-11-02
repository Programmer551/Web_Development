const addPerson = () => {
  const fakeId = Date.now();
  const newPerson = { id: fakeId, name };
  setPeople([...people, newPerson]);
};
export default addPerson;
