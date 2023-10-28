import { useState } from "react";
import { data } from "../../../data";
const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);
  const submit = (e) => {
    e.preventDefault();
    if (!name) return;

    const fakeId = Date.now();

    const newUser = { id: fakeId, name };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    setName("");
  };
  return (
    <div>
      <form
        className='form'
        onSubmit={submit}>
        <h4>Add User</h4>
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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button
          type='submit'
          className='btn btn-block'>
          submit
        </button>
      </form>
      {/* render users below */}

      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
