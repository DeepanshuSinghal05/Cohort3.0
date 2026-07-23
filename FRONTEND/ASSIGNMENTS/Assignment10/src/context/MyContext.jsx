import { createContext, useEffect, useState } from "react";


export let MyStore =  createContext()

export const ContextProvider = ({children})=>{

    const [users, setUsers] = useState(() => {
        const storedUsers = localStorage.getItem("users");
        return storedUsers ? JSON.parse(storedUsers) : [];
      });
    const [isLogIn, setIsLogIn] = useState(false)
    const [currentUser, setCurrentUser] = useState(null)
    const [isSignUp, setIsSignUp] = useState(false)

    

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
      }, [users]);

    return <MyStore.Provider value={{users, setUsers, isLogIn, setIsLogIn, currentUser, setCurrentUser, isSignUp, setIsSignUp}}>{children}</MyStore.Provider>

}