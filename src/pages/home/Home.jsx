import React, { useState } from 'react'
import './home.css'
import { Navbar, Posts, Recentposts, Readpost, Listproducts,Showproduct, Search } from '../../components'
import image from '../../assets/post3.png'
import Editpost from '../editpost/Editpost'
import post from '../post'
import listproduct from '../listproduct'
import image2 from '../../assets/post2.png'
import { IoMdArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

// Api call to all post that would be random will be here
// and all the data would sends as props to Posts component which has posts html and css
// which will render the UI for all posts
// when user click to see any post in detail from POST component
//Post COmp will return its ID to this comp
// then we again sends this IF to read Post Component

const Home = () => {
  const [editProduct, setEditProduct] = useState(false);
  const [update, setUpdate] = useState(false)
  const [read, setRead] = useState(false);
  const [searchbutton, setSearchbutton] = useState(false);
  const [show, setShow] = useState(2)
  const [scroll, setScroll] = useState(2)
  const [readProduct, setReadProduct] = useState(false)




//   function togglePost() {
//     setEditProduct(prevstate => !prevstate);
//   }
//   const toggleUpdate = () => {
//     setUpdate(true)
//   }
//   const toggleSearch = () =>{
//     setSearchbutton(prevstate => !prevstate)
//  }
   function toggleBackPost() {
    setEditProduct(false);
  }
 
  const toggleReadpost = () => {
    setRead(prevstate => !prevstate);
  }

  const toggleReadproduct = () => {
    setReadProduct(prevstate => !prevstate)
  }


 
  
  const showMore = () => {
    if (show <= scroll ) {
      setShow(prevstate => prevstate + 2);
      document.getElementById('container').scrollLeft += 200;
      setScroll([prevstate => prevstate+3])
    }
  }
  const cardPost = post.map(item => {
    return (
      <Posts
        className="rb__content-feed-section"
        id={item.id}
        img={image}
        author={item.author}
        title={item.title}
        content={item.content}
        handlePostClick={toggleReadpost}
      />
    )
  })
  // listproduct.slice(0, show)
  const listOfProduct = listproduct.slice(0, show).map(item => {
    return (
      <Listproducts
        id={item.id}
        image={image2}
        name={item.name}
        handleProductClick={toggleReadproduct}
      />
    )
  })

  return (
    
    <>
      <div className='rb__content'>
        {editProduct &&
          <Editpost
            handleClick={toggleBackPost}
          />
        }

        { readProduct &&
            <Showproduct />
        }
        {searchbutton && <Search />}
        { !readProduct &&!read && !update && !editProduct &&
          <>
            <div className="rb__content-post">
              <div className="rb__content-post_cards">
                {cardPost}
              </div>
              <Recentposts
                id={1}
                author="Girish bari"
                title="Mind-Blowing Twitter Stats and Facts on Our Favorite Network (2018)"
                className="rb__content-recentposts-section"
              />
            </div>
            <div className="rb__content-product fade-in">
              <div id='container' className="rb__content-product_cards fade-in">
                {listOfProduct}
              </div>
              <button onClick={showMore}><IoMdArrowForward size={30}/></button>
            </div>
          </>

        }

      </div>
    </>

  )
}

export default Home