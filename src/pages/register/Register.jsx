import React from 'react'
import './register.css'
import image from '../../assets/login.png'

const Register = () => {
  return (
    <div className='rb__register'>
      <div className='rb__register-image'>
        <img src={image} />
      </div>
      <div className='rb__register-form_container'>
        <h1>Register</h1>
        <input type='text' placeholder='Fullname'/>
        <input type='Email' placeholder='Email' />
        <input type='text'  placeholder='Contact_no'/>
        <input type='text' placeholder='Password'/>
        <div className='rb__register-form_container-button'>
            <button>SignUp</button>
        </div>
      </div>
    </div>
  )
}

export default Register