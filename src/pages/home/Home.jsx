import React from 'react'
import './home.css'
import { Navbar, Posts, Recentposts } from '../../components'
import image from '../../assets/post3.png'


// Api call to all post that would be random will be here
// and all the data would sends as props to Posts component which has posts html and css
// which will render the UI for all posts
// when user click to see any post in detail from POST component
//Post COmp will return its ID to this comp
// then we again sends this IF to read Post Component

const Home = () => {
  return (
    <>
       <Navbar />
        <div className='rb__content'>
        
        <Posts
            className="rb__content-feed-section"
            id={1}
            img={image}
            author="Girish bari"
            title="Mind-Blowing Twitter Stats and Facts on Our Favorite Network (2018)"
            content="User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started."
        />
        {/* <Posts 
            className=""
            id={1}
            img={image}
            author="Girish bari"
            title="Mind-Blowing Twitter Stats and Facts on Our Favorite Network (2018)"
            content="User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started."
        /> */}
        <Recentposts 
            id={1}
            author="Girish bari"
            title="Mind-Blowing Twitter Stats and Facts on Our Favorite Network (2018)"
            className="rb__content-recentposts-section"
        />
      
    </div>
    </>

  )
}

export default Home