import { useState } from "react";
import { createContext } from "react";

export let MyStore = createContext()

export const ContextProvider = ({children})=>{

    const [count, setCount] = useState(0)

    return <MyStore.Provider value = {{count, setCount}}>{children}</MyStore.Provider>
}