import React from "react";
import {Routes,Route} from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Error from "./components/Error";
import Logout from "./components/Logout";
function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/aboutus" element={<Aboutus/>} />
    <Route exact path="/contact" element={<Contact/>} />
    <Route exact path="/signin" element={<Login/>} />
    <Route exact path="/signup" element={<Signup/>} />
    <Route exact path="/logout" element={<Logout/>} />
    <Route path="*" element={<Error/>} />
    </Routes>
    </>
  );
}

export default App;
