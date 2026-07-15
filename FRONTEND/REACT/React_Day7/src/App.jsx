import React, { useState } from 'react';
import Register from "./components/Register";
import Login from "./components/Login";
import UserCard from "./components/UserCard";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [userData, setUserData] = useState([]);

  return (
    <div className="bg-gray-300 h-screen flex justify-center items-center">
      {toggle ? (
        userData.map((elem, index) => (
          <UserCard key={index} userData={elem} />
        ))
      ) : (
        <Register
          setUserData={setUserData}
          setToggle={setToggle}
        />
      )}
    </div>
  );
};

export default App;