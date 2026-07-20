import { createContext, useState } from "react";

export const MyStore = createContext()

export const ContextProvide = ({children})=>{
    
    let [toggle, setToggle] = useState(true);
    const [cartItems, setCartItems] = useState([])

    return <MyStore.Provider value = {{toggle, setToggle, cartItems, setCartItems}}>{children}</MyStore.Provider>

}