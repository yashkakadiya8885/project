import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Signin from '../Pages/Signin'

const Allroute = () => {
  return (
    <div>
        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/singin' element={<Signin/>}/>
        </Routes>
    </div>
  )
}

export default Allroute