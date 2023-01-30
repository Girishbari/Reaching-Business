import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import { Home, Forgotpass, Listproducts, Login, Register } from './pages'
import { Updateprofile } from './components'
import './App.css'
const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>  
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/forgotpass' element={<Forgotpass/>}/>
        <Route path='/updateprofile' element={<Updateprofile/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App