import React, { useState } from 'react'
import './login.css'
import image from '../../assets/login.png'
import { useNavigate } from 'react-router-dom'
import { MdAlternateEmail } from 'react-icons/md'
import { Si1Password } from 'react-icons/si'
import { getAuth } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import {app} from "../../firebaseConfig"


const Login = () => {

  const navigate = useNavigate();
  const auth = getAuth(app);


  const [data, setData] = useState({});


  const handleInput = (event) =>{
    let newInput = {[event.target.name]: event.target.value}
    setData({...data, ...newInput});
  }

  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, data.email, data.password)
    .then((response) => {
        console.log(response.user)
        navigate("/")
    })
    .catch((err) =>{
        alert(err.message)
    })
  }

  return (
    <div className='rb__login'>
      <div className='rb__login-image'>
        <img src={image} />
      </div>
      <div className='rb__login-form_container'>
        <h1>Login</h1>
        <input 
          name='email'
          type='text' 
          placeholder='Username or Email' 
          onChange={(event) => handleInput(event)}
          />
        <input 
          name='password'
          type='text' 
          placeholder='Password' 
          onChange={(event) => handleInput(event)}
          />
        <div className='rb__login-form_container-buttons'>
          <button 
            onClick={handleSubmit}
          >
              Login
          </button>
          <button onClick={() => navigate('/Register')}>SignUp</button>
        </div>
        <div className='rb__login-forgotpass_container'>
        <p>Don't know your password, <a onClick={() => navigate('/Forgotpass')}>click here</a></p>
      </div>
      </div>
     
    </div>
  )
}

export default Login