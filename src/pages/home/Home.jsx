import React, { useState } from 'react'
import './home.css'
import { Navbar, Posts, Recentposts, Readpost } from '../../components'
import image from '../../assets/post3.png'
import Editpost from '../editpost/Editpost'
import post from '../post'
import { useNavigate } from 'react-router-dom'


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
  const navigation = useNavigate();

  function togglePost() {
    setEditProduct(true);
  }
  function toggleBackPost() {
    setEditProduct(false);
  }
  function toggleUpdate() {
    setUpdate(true)
  }
  function toggleReadpost() {
    setRead(true);
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

  return (
    <>
      <Navbar
        handleClick={togglePost}
        handleUpdate={toggleUpdate}
      />
      <div className='rb__content'>
        {editProduct &&
          <Editpost
            handleClick={toggleBackPost}
          />
        }
        {read &&
          <Readpost

          />
        }
        {!read && !update && !editProduct &&
          <>
            <div className="rb__content-cards_Post">
              {cardPost}
            </div>
            <Recentposts
              id={1}
              author="Girish bari"
              title="Mind-Blowing Twitter Stats and Facts on Our Favorite Network (2018)"
              className="rb__content-recentposts-section"
            />
          </>

        }

      </div>
    </>

  )
}

export default Home