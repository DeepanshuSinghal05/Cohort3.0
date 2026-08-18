import { createContext, useState } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [registeredUsers, setRegisteredUsers] = useState(JSON.parse(localStorage.getItem("registeredUsers")) || []);
  const [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem("loggedInUser")) || null);

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
  };

  return (
    <Auth.Provider
      value={{
        registeredUsers,
        setRegisteredUsers,
        loggedInUser,
        setLoggedInUser,
        logout
      }}
    >
      {children}
    </Auth.Provider>
  );
};
