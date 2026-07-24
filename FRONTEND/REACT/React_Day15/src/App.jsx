import React from 'react'
import Navbar from './components/Navbar'

import AppRoute from './routes/AppRoute'

const App = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Navbar/>
      <AppRoute/>
    </div>
  )
}

export default App
