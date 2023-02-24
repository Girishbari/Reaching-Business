import React from 'react'
import { BrowserRouter , Routes, Route, Router } from 'react-router-dom'
import { Home, Forgotpass, Listproducts, Login, Register } from './pages'

import './App.css'
import { useState } from 'react'




const App = () => {

  const [editProduct, setEditProduct] = useState(false);
  const [update, setUpdate] = useState(false)
  const [searchbutton, setSearchbutton] = useState(false);


  



  return (
      <div className='App'>
        <Routes>
          <Route path='*' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Forgotpass' element={<Forgotpass />} />
          <Route path='/Register' element={<Register />} /> 
        </Routes>
      </div>
  )
}

export default App