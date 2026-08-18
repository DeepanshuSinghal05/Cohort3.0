import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import UserCard from '../components/UserCard'
import { axiosInstance } from '../config/axiosinstance'
const UsersPage = () => {

    const [userData, setUserData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    let getUserData = async ()=>{
        try {
            
            let response = await axiosInstance.get('/users')
            console.log(response)
            setUserData(response.data)
            setIsLoading(false)

        } catch (error) {
            console.log('error is User API', error)
            
        }
    }
    useEffect(()=>{
        getUserData()
    },[])

    if(isLoading) return <h1 className='text-4xl font-semibold'>User Data is Loading</h1>
    
  return (
    <div className='grid grid-cols-4 gap-5'>
      {
        userData.map((val)=> <UserCard key = {val.id} user = {val}/>)
      }
    </div>
  )
}

export default UsersPage
