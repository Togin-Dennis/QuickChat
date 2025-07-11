import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
function App() {
  return (
    <div className="AppMainDiv">
      
<Routes>

<Route   path='/' element={<HomePage/>}/>
<Route   path='/login' element={<LoginPage/>}/>
<Route   path='/profile' element={<ProfilePage />}/>


</Routes>



    </div>
  )
}

export default App
