import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./utils.css";
import Home from "./Home/Home";
// import Sign_in from "./Sign_in/Sign_in";

import Login from "./Login/Login";
import Main from "./Main/main";
import Details from "./details/details";
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
          element={<Details />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
