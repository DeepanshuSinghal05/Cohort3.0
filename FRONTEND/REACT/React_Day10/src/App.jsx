import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Usercard from "./components/Usercard";
import Form from "./components/Form";
import UpdateUser from "./components/UpdateUser";

const App = () => {
  const [toggle, setToggle] = useState(false);
  let [users, setUsers] = useState(()=>{
    return JSON.parse(localStorage.getItem("users")) || [];
  });

  let [isUpdate, setIsUpdate] = useState(false);

  let [updateIndex, setUpdateIndex] = useState(null);

  return (
<div className="min-h-screen bg-gray-100">
  <Navbar setToggle={setToggle} />

  <div className="max-w-7xl mx-auto px-8 py-10">

    {!isUpdate &&
      (toggle ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {users.map((elem, index) => (
            <Usercard
              key={index}
              user={elem}
              index={index}
              setIsUpdate={setIsUpdate}
              setUpdateIndex={setUpdateIndex}
              setUsers={setUsers}
            />
          ))}
        </div>
      ) : (
        <div className="flex justify-center">
          <Form
            users = {users}
            setUsers={setUsers}
            setToggle={setToggle}
          />
        </div>
      ))}

    {isUpdate && (
      <div className="flex justify-center">
        <UpdateUser
          users={users}
          setUsers={setUsers}
          updateIndex={updateIndex}
          setIsUpdate={setIsUpdate}
        />
      </div>
    )}

  </div>
</div>
  );
};

export default App;
