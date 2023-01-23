import React from 'react'
import './login.css'
import image from '../../assets/login.png'
import { useNavigate } from 'react-router-dom'
import { MdAlternateEmail } from 'react-icons/md'
import { Si1Password } from 'react-icons/si'
{/* <MdAlternateEmail  className='rb__login-form_container-icons'/> */ }

const Login = () => {

  const navigate = useNavigate();
  return (
    <div className='rb__login'>
      <div className='rb__login-image'>
        <img src={image} />
      </div>
      <div className='rb__login-form_container'>
        <h1>Login</h1>
        <input type='text' placeholder='Username or Email' />
        <input type='Email' placeholder='Password' />
        <div className='rb__login-form_container-buttons'>
          <button>Login</button>
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