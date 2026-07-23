import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { MyStore } from './context/MyContext'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {

  const [count, setCount] = useState(0)
  
  const [toggle, setToggle] = useState(false)
  
  
  useEffect(()=>{
    console.log("App Rendering...")
  },[count])


  return (
    <div>
      <h1>Count = {count}</h1>
      <button onClick={()=>setCount(count + 1)}>Increment</button>
      {toggle ? <About /> : <Contact />}
      <button onClick={()=>setToggle((prev)=>!prev)}>I am TOGGLE</button>
    </div>
  )
}

export default App
