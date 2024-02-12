import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Contact from './pages/Contact'
import RootLayout from './components/RootLayout'


const App = () => {
  return (
    <>

      <Routes>
        <Route element={<RootLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />

          <Route path='*' element={<NotFound />} />


        </Route>


      </Routes >

    </>
  )
}

export default App
