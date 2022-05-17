import React, { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import "./App.css";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { auth } from "./firebase";
import Navbar from "./components/NavBar/Navbar";
import Navbar2 from "./components/NavBar2/Navbar2";

function App() {
  const [userName, setUserName] = useState("");
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
        setUserName(user.displayName);
      }
      else{
        setUserName("");
      }
    })
  }, [])
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={
            <>
          <Navbar name={userName} />
          <Login />
          </>} />
          <Route path="/signup" element={
          <>
          <Navbar name={userName} />
          <Signup />
          </>} />
          <Route path="/" element={
          <>
          <Navbar name={userName} />
          <Header name={userName} />
          </>
          }/>
          <Route path="/resume" element={
          <>
          <Navbar2 name={userName} />
          <Body />
          </>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
