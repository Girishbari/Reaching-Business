import React from 'react'
import './forgotpass.css'
import { Login } from '../login/Login'
import image from '../../assets/login.png'
import { useNavigate } from 'react-router-dom'


const Forgotpass = () => {
  const navigate = useNavigate()
  return (
    <div className='rb__forgot'>
      <div className='rb__forgot-image'>
        <img src={image} />
      </div>
      <div className='rb__forgot-form_container'>
        <h1>Forgot Password ?</h1>
        <input type='text' placeholder='Username or Email' />
        <div className='rb__forgot-form_container-buttons'>
          <button>Verify</button>
          <button onClick={() => navigate('/Login')}>Go back</button>
        </div>
        <div className='rb__forgot-forgotpass_container'>
          {/* <p>Don't know your password, <a onClick={() => navigate('/Forgotpass')}>click here</a></p> */}
        </div>
      </div>

    </div>
  )
}

export default Forgotpass