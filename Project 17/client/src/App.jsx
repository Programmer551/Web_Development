import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./utils.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Services from "./pages/Services/Services";
import Navbar from "./components/Navbar/Navbar";
import Logout from "./components/Logout/Logout";
import { useState, useEffect } from "react";
const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/user", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("Login_Token")}`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setUser(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (user) {
      sessionStorage.setItem("User", JSON.stringify({ user }));
      // console.log(sessionStorage.getItem("User"));
    }
  }, [user]);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/about'
            element={<About />}
          />
          <Route
            path='/contact'
            element={<Contact />}
          />
          <Route
            path='/register'
            element={<Register />}
          />
          <Route
            path='/login'
            element={<Login />}
          />
          <Route
            path='/services'
            element={<Services />}
          />
          <Route
            path='/logout'
            element={<Logout />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
