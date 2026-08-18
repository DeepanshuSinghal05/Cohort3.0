import React from 'react'

const About = ({users, greet}) => {


    console.log('About rendering....')


  return (
    <div>
       <h1>THIS IS ABOUT</h1>
    </div>
  )
}

export default React.memo(About, (prevProps, nextProps)=>{
    return prevProps.users.id === nextProps.users.id
})
