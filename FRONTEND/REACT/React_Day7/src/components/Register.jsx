import React, { useState } from 'react'

const Register = ({setToggle, setUserData}) => {

    let [formData, setFormData] = useState({
        name : "",
        password : "",
        email : ""
    })

    

    const handleChange = (e) => {
        let {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        setUserData((prev)=>[...prev, formData])
        setFormData({
            name : "",
            password : "",
            email : ""
        })
    }

  return (
    <div className='bg-white w-90 p-6 rounded-xl flex flex-col gap-4'>
        <h1>Register</h1>
        <form onSubmit={handleSubmit} action="" className='flex flex-col gap-4'>
            <input required value={formData.name}  name='name' onChange={handleChange} className='border border-gray-400 rounded p-2' type="text" placeholder='Name' />
            <input required value={formData.email}  name='email'onChange={handleChange} className='border border-gray-400 rounded p-2' type="text" placeholder='Email' />
            <input required value={formData.password}  name='password'onChange={handleChange} className='border border-gray-400 rounded p-2' type="text" placeholder='Password' />
            <button className='p-2 bg-blue-600 text-white rounded cursor-pointer '>Register</button>
        </form>
    <p>Already have an Account?<span onClick={()=>setToggle((prev)=>!prev)} className='text-blue-600 cursor-pointer'> Login Here</span></p>
    </div>
  )
}

export default Register
