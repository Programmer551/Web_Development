import { useContext } from "react";
import { useApp } from "./Navbar";

const UserContainer = () => {
  const { login, logout, user } = useApp();

  if (user == null) {
    return <button onClick={login}> Please Login</button>;
  }
  return (
    <div>
      <h1>{user.name}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
export default UserContainer;
