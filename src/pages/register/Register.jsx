import React from 'react'
import './register.css'
import image from '../../assets/login.png'
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { app,database } from '../../firebaseConfig'
import { addDoc, collection } from "firebase/firestore"; 
import { useState } from 'react';



const Register = () => {

  const auth = getAuth(app);

  const [data, setData] = useState({});
  const collectionRef = collection(database, "users")


  const handleInput = (event) =>{
    let newInput = {[event.target.name]: event.target.value}
    setData({...data, ...newInput});
  }

  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((response) => {
        console.log(response.user)
        addDoc(collectionRef,{
          email: data.email,
          password: data.password,
          fullname: data.fullname,
          contact_no: data.contact
        })
        .then(() => {
          alert('data added')
        })
        .catch((Error) => {
          console.log(Error)
        })
      })
    .catch((err) =>{
        alert(err.message)
    })
  }

  return (
    <div className='rb__register'>
      <div className='rb__register-image'>
        <img src={image} />
      </div>
      <div className='rb__register-form_container'>
        <h1>Register</h1>
        <input 
          name='fullname'
          type='text' 
          placeholder='Fullname'
          onChange={(event) => handleInput(event)}
          />
        <input 
          name="email" 
          type='Email' 
          placeholder='Email' 
          onChange={(event) => handleInput(event)}
          />
        <input   
          name="contact" 
          type='number' 
          placeholder='Contact_no' 
          onChange={(event) => handleInput(event)}
          />
        <input 
          name="password" 
          type='text' 
          placeholder='Password'
          onChange={(event) => handleInput(event)}
          />
        <div className='rb__register-form_container-button'>
            <button
                        onClick={handleSubmit}

            >SignUp</button>
        </div>
      </div>
    </div>
  )
}

export default Register