import React from 'react'
import './posts.css'
import image from '../../assets/post3.png'

const Posts = (props) => {
  console.log(props)
  return (
    <div className='rb__posts'>
      <div className='rb__posts-container_content'>
        <div className='rb__posts-container_content-author'>
          <p>BY</p> <h5>{props.author}</h5>
        </div>
        <div className='rb__posts-container_content-title'>
          <h2>{props.title}</h2>
        </div>
        <div className='rb__posts-container_content-content'>
          <p>{props.content} <a href='#'>Read more</a></p>
          
        </div>
      </div>
      <div className='rb__posts-image'>
          {/* Giving problem <img src={props.img} alt='posts-img' /> */}
          <img src={props.img} alt='posts-img' />
      </div>
    </div>
  )
}

export default Posts