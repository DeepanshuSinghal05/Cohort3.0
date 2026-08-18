import React, { useCallback, useMemo, useState } from 'react'
import Home from './components/Home'
import About from './components/About'

const App = () => {

  const [count, setCount] = useState(0)

  const [users, setUsers] = useState({name : 'Deepanshu', id : 123})

  let greet = useCallback(()=>{
    console.log("Hello")
  },[])

  console.log('App rendering....')

  let calculation = useMemo(()=>{
    let sum = 0
    console.log('calculation function rendering....')
    for(let i=0; i<100; i++){
      sum += i
    }

    return sum
  },[])

  return (
    <div>
      <h1>THIS IS APP</h1>
      <h2>Count is {count}</h2>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <h2>Name is {users.name}</h2>
      <button onClick={()=>setUsers({...users, name : 'Deepanshu Singhal'})}>Change Name</button>
      <Home users = {users} greet = {greet}/>
      <About users = {users} greet = {greet}/>
      <h2>Calculation is {calculation}</h2>
    </div>
  )
}

export default App
