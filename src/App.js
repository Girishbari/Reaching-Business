import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import { Home, Forgotpass, Listproducts, Login, Register, Editpost, Chat } from './pages'
import { Updateprofile,Readpost, Search } from './components'
import  {Navbar} from "./components"
import { useNavigate } from 'react-router-dom'
import './App.css'
import { useState } from 'react'
const App = () => {

  const [editProduct, setEditProduct] = useState(false);
  const [update, setUpdate] = useState(false)
  const [searchbutton, setSearchbutton] = useState(false);
  // const navigate= useNavigate();

  
  
  const toggleUpdate = () => {
    setUpdate(true)
  }
  const toggleSearch = () =>{
    setSearchbutton(prevstate => !prevstate)
 }


  return (
    <BrowserRouter>
      <div className='App'>
     <Navbar

        handleUpdate={toggleUpdate}
        handleSearch={toggleSearch}
      />
        <Routes>  
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path="/" >
          <Route index element = {<Home />}/>
          <Route path=":id" element = {<Readpost />} />
          <Route path="/Updateprofile"  element= {<Updateprofile />} />
          <Route path ="/Editpost" element = {<Editpost />} />
          <Route path ="/Chat" element = {<Chat />} />
          <Route path = "/Search" element ={<Search />} />
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/forgotpass' element={<Forgotpass/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App