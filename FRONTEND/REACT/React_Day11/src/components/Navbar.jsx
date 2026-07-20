import React, { useContext } from 'react'
import { MyStore } from '../context/MyContext'

const Navbar = () => {

  let {setToggle} = useContext(MyStore)

  return (
    <div className=' flex items-center bg-gray-400 rounded justify-between p-5'>
      <div>Logo</div>
      <div className='flex gap-10 text-xl'>
        <p onClick={()=>setToggle(false)} className='cursor-pointer'>Home</p>
        <p onClick={()=>setToggle(true)} className='cursor-pointer'>Cart</p>
      </div>
      <button>Loin</button>
    </div>
  )
}

export default Navbar
