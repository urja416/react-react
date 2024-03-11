import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'

import RootLayout from './components/RootLayout'


const App = () => {
  return (
    <>

      <Routes>
        <Route element={<RootLayout />}>
          <Route path='/' element={<HomePage />} />



        </Route>


      </Routes >

    </>
  )
}

export default App
