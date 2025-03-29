import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Dashboard from './Dashboard'
import Signup from './Signup'
import Signok from './Signok'

const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Signok/>}/>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='signup' element={<Signup/>}/>
        </Routes>
    </div>
  )
}

export default Routing