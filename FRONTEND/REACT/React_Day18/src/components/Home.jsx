import React from 'react'

const Home = ({users, greet}) => {

    console.log('Home rendering....')


  return (
    <div>
      <h1>THIS IS HOME</h1>
    </div>
  )
}

export default React.memo(Home,(prevProps, nextProps)=>{
    return prevProps.users.id === nextProps.users.id
})
