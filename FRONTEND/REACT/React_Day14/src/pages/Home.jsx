import React from 'react'
import { Outlet, useNavigate } from 'react-router'

const Home = () => {

    let navigate = useNavigate()

  return (
    <div>
      <h1>This is Home</h1>
      <button onClick={()=>navigate('/detail')}>Show Detail</button>
      <Outlet/>
    </div>
    
  )
}

export default Home
