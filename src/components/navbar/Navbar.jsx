import React from 'react'
import { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsChatLeftDots } from 'react-icons/bs'
import { FaRegUserCircle } from 'react-icons/fa'
import image from '../../assets/post3.png'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'


// css styling name convention bem
const Navbar = (props) => {
  const [togglemenu, setTogglemenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [post, setPost] = useState(false)
  const [user, setUser] = useState(false)
  const navigation = useNavigate();

  useEffect(() =>{
      setInterval(() =>{
        setPost(false)
      },5000)
  })
  function handleClick(){
      setPost(true)
  }
  function changeToUpdate(){
    props.handleUpdate();
    navigation('/Updateprofile')
}
  


  return (
    <>
      <div className='rb__navbar'>

        <div className='rb__navbar-links_container'>
          <p><li className='rb__navbar-links_option' href='#home'>Home</li></p>
          <p><li className='rb__navbar-links_option' href='#Products'>Products</li></p>
          <div className='rb__navbar-links_container-post' >  
            {post
              ? <button onClick={() => setPost(false)}>Post</button>
              : <button onClick={() => setPost(true)}>Post</button>
            }
            {post && (
              <div className="rb__navbar-links_container-post-menu_container scale-up-center">
                <button className='rb__navbar-links_container-post-menu_container-button1' onClick={props.handleClick}>Edit Post</button>
                <button className='rb__navbar-links_container-post-menu_container-button2'>Edit Product</button>
              </div>
            )}
          </div>
        </div>

        <div className='rb__navbar-buttons_container'>
          <BsChatLeftDots color='#18003C' size={25} cursor='pointer' />
          <AiOutlineSearch color='#18003C' cursor='pointer' size={27} onClick={() => setSearch(true)} />
          <div className="rb__navbar-buttons_container-user">
            {user
              ? <FaRegUserCircle color='#18003C' size={25} cursor='pointer' onClick={() => setUser(false)} />
              : <FaRegUserCircle color='#18003C' size={25} cursor='pointer' onClick={() => setUser(true)} />
            }
            {
              user && (
                <div className="rb__navbar-buttons_container-user_container">
                  <div className="rb__navbar-buttons_container-user_container-img">
                    <img src={image} />
                  </div>
                  <h3>Hy, Girish</h3>
                  {/* {user} */}
                  <button className='rb__navbar-buttons_container-user_container-button1' onClick={changeToUpdate}>Update</button>
                  <button className='rb__navbar-buttons_container-user_container-button2'>Log-out</button>
                </div>
              )
            }
          </div>
        </div>
        <div className='rb__navbar-menu'>
          {togglemenu
            ? <RiCloseLine color='#18003C' size={27} onClick={() => setTogglemenu(false)} />
            : <RiMenu3Line color='#18003C' size={27} onClick={() => setTogglemenu(true)} />
          }
          {togglemenu && (
            <div className='rb__navbar-menu_container scale-up-center'>
              <div className='rb__navbar-menu_container-links'>
                <p><li className='rb__navbar-links_option' href='#home'>Home</li></p>
                <p><li className='rb__navbar-links_option' href='#Products'>Products</li></p>
                <button>Post</button>
              </div>
            </div>
          )
          }

        </div>
      </div>
    </>

  )
}

export default Navbar