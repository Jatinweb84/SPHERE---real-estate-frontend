import { useState } from 'react'
import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { Routes,Route } from 'react-router'
function App() {
   return (
    <>
    <Navbar/>

    <main className='pt-20'>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </main>
    </>
   )
}

export default App
