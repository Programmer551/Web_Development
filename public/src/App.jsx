import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./utils.css";
import Home from "./Home/Home";
// import Sign_in from "./Sign_in/Sign_in";

import Login from "./Login/Login";
import Main from "./Main/main";

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
          element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
