import { createContext, useState } from "react";
import NavLinks from "./NavLinks";
import { useContext } from "react";
export const NavbarContext = createContext();
console.log(NavbarContext);
// Custom Hook

export const useApp = () => useContext(NavbarContext);
const Navbar = () => {
  const [user, setUser] = useState({ name: "Duraid" });
  const logout = () => {
    setUser(null);
  };
  const login = () => {
    setUser({ name: "Duraid" });
  };
  return (
    <NavbarContext.Provider value={{ login, logout, user }}>
      <div className='navbar'>
        <h2>Navbar</h2>
        <NavLinks
        // user={user}
        // logout={logout}
        // login={login}
        />
      </div>
    </NavbarContext.Provider>
  );
};
export default Navbar;
