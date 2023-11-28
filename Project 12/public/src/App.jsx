import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./utils.css";
import Home from "./Home/Home";
// import Sign_in from "./Sign_in/Sign_in";

import Login from "./Login/Login";
import Main from "./Main/main";
import Details from "./details/details";
import About from "./About/About";
import Contact_us from "./Contact us/Contact_us";
import Services from "./Services/Services";
import Cart from "./Cart/Cart";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />

        <Route
          path='/Login'
          element={<Login />}
        />
        <Route
          path='/main'
          element={<Main />}
        />
        <Route
          path='/details'
          element={<Details />}
        />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/services'
          element={<Services />}
        />
        <Route
          path='/contact'
          element={<Contact_us />}
        />
        <Route
          path='/cart'
          element={<Cart />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
