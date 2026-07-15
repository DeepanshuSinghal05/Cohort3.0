import React from 'react'

const UserCard = ({userData}) => {
  return (
    <div className='p-4 border-gray-400 border rounded bg-white flex flex-col gap-4'>
      <div className='w-50 h-50 rounded overflow-hidden'> 
        <img className='h-full w-full' src="" alt="" />
      </div>
      <div>
        <h1>name : {userData.name}</h1>
        <p>email : {userData.email}</p>
      </div>
      <button>Delete</button>
    </div>
  )
}

export default UserCard
