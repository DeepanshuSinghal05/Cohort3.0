import React, { useState } from 'react'

const App = () => {

  // BRUTE FORCE METHOD
  let [name, setName] = useState('')
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  // BETTER APPROACH
  let [formData, setFormData] = useState({
    name : '',
    email : '',
    password : ''
  })

  // OPTIMAL APPROACH

  const handleChange = (e)=>{
    let [name, value] = [e.target.name, e.target.value]
    setFormData({...formData, [name] : value})
  }

  return (
    <div className='p-5' >
      {/* BRUTE FORCE METHOD */}
      {/* <div className='flex flex-col gap-2'>
      <h1 className='text-2xl '>BRUTE FORCE METHOD</h1>
      <input onChange={(e)=>{setName(e.target.value)}} className='border-2' type="text" placeholder='Enter your Name : ' />
      <input onChange={(e)=>{setEmail(e.target.value)}} className='border-2' type="text" placeholder='Enter your Email : ' />
      <input onChange={(e)=>{setPassword(e.target.value)}} className='border-2' type="text" placeholder='Enter your Password : ' />
      <h1>Name is : {name}</h1>
      <h1>Email is : {email}</h1>
      <h1>Password is : {password}</h1>
      </div> */}

      {/* BETTER APPROACH */}
      {/* <div>
        <h1 className='text-3xl'>BETTER APPROACH</h1>
        <input className='border-2' onChange={(e)=>{
          setFormData({...formData, name : e.target.value})
        }} type="text" placeholder='Enter your Name :' />
        <h1>Name : {formData.name}</h1>

        <input className='border-2' onChange={(e)=>{
          setFormData({...formData, email : e.target.value})
        }} type="text" placeholder='Enter your Email :' />
        <h1>Email : {formData.email}</h1>

        <input className='border-2' onChange={(e)=>{
          setFormData({...formData, password : e.target.value})
        }} type="text" placeholder='Enter your Password :' />
        <h1>Password : {formData.password}</h1>
      </div> */}

      {/* OPTIMAL APPRAOCH */}
      <div>
      <h1 className='text-3xl'>OPTIMAL APPROACH</h1>
        <input name='name' className='border-2' onChange={handleChange} type="text" placeholder='Enter your Name :' />
        <h1>Name : {formData.name}</h1>

        <input name='email' className='border-2' onChange={handleChange} type="text" placeholder='Enter your Email :' />
        <h1>Email : {formData.email}</h1>

        <input name='passowrd' className='border-2' onChange={handleChange} type="text" placeholder='Enter your Password :' />
        <h1>Password : {formData.password}</h1>
      </div>
    
    </div>
  )
}

export default App
