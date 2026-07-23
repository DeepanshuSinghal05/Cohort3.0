import React, { useEffect } from 'react'

const About = () => {
  console.log("About Rendering...")

  useEffect(()=>{
    

    return ()=>{
      clearInterval(interval)
      console.log("I am triggered because ABOUT has been Demounted")
    }
  },[])

  let interval = setInterval(() => {
    console.log("I am SETINTERVAL")
  }, 500);


  return (
    <div>
      <h1>I am ABOUT</h1>
    </div>
  )
}

export default About
