import React from 'react'
import { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsChatLeftDots } from 'react-icons/bs'
import { ImPencil2 } from 'react-icons/im'
import { FaRegUserCircle } from 'react-icons/fa'
// import { Search } from '../search/Search'



// css styling name convention bem
const Navbar = () => {
  const [togglemenu, setTogglemenu] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <>
         {search && (
          <div className='rb__search-container scale-up-center'>
              <input type="text" placeholder='Type to search'/>
          </div>
        )
      }
 
       <div className='rb__navbar'>
  
      <div className='rb__navbar-links_container'>
        <p><li className='rb__navbar-links_option' href='#home'>Home</li></p>
        <p><li className='rb__navbar-links_option' href='#Products'>Products</li></p>
        <button>Post</button>
      </div>
      <div className='rb__navbar-buttons_container'>
        <BsChatLeftDots color='#18003C' size={25} cursor='pointer' />
        {search
          ? <RiCloseLine color='#18003C' size={27} cursor='pointer' onClick={() => setSearch(false)} />
          : <AiOutlineSearch color='#18003C' cursor='pointer' size={27} onClick={() => setSearch(true)} />
        }
       
        <FaRegUserCircle color='#18003C' size={25} cursor='pointer' />
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