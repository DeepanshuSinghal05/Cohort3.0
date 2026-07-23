import React, { useContext, useState } from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { MyStore } from "./context/MyContext";
import Navbar from "./components/Navbar";

const App = () => {
  let { isLogIn, isSignUp, users } = useContext(MyStore);
  console.log(users)
  return (
    <div>

      <div>{isLogIn && <Navbar/>}</div>

      <div>{isSignUp ? <Login /> : <SignUp />}</div>



    </div>
  );
};

export default App;
