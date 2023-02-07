import React from 'react'
import './readpost.css'
import image from '../../assets/post3.png'
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai'
import { useParams } from 'react-router-dom'

const Readpost = () => {

  const {id} = useParams();
  return (
    <div className="rb__readpost">
      <div className="rb__readpost-header">
        <div className="rb__readpost-header_container">
          <h1>10 Reasons to Build Your Website with WP Page Builder</h1>
          <p>People’s quest for creating websites has easily taken us to a new era of site development. Where, with the availability of robust page building tools, creating websites has become a lot more fun (especially for non-developers).</p>
          <div className="rb__readpost-header_container-author">
            <p>BY</p><h4>Girish Bari</h4>
          </div>

        </div>
      </div>
      <div className="rb__readpost-content">
        <div className="rb__readpost-content_container">
          <div className="rb__readpost-content_container-post">
            <img src={image} />
            <p>People’s quest for creating websites has easily taken us to a new era of site development. Where, with the availability of robust page building tools, creating websites has become a lot more fun (especially for non-developers). The multitude of tools and plugins available to you is vast when you try building websites on WordPress. Today we’ll explore a new one, WP Page Builder. If you’re tired of the same old page builder plugins, this is one you should try out.</p>
            <p>Wondering what makes WP Page Builder so special? I would say, what doesn’t? It’s developed by the team over at Themeum, who has been creating WordPress themes since 2013. As mentioned above, the plugin is a full pack of essential site building elements with all modern the modern functionality you’ve come to expect from a page builder plugin. Let’s have a look below at all of the juicy features WP Page Builder includes.</p>
          </div>
          <div className="rb__readpost-content_container-buttons">
            <div className="rb__readpost-content_container-buttons_b1">
              <AiOutlineLike size={40} /><p>34</p>
            </div>
            <div className="rb__readpost-content_container-buttons_b2">
              <AiOutlineDislike size={40} /><p>35</p>
            </div>
          </div>
        </div>
      </div>
      <div className="rb__readpost-content_author-container">
        <img src={image}/>
        <h4>Girish BAri</h4>
        <div className="rb__readpost-content_author-container_comment">
          <h4>Comment</h4>
          <input type='text' placeholder='comment'/>
          <button>Post</button>
        </div>
      </div>
    </div>
  )
}

export default Readpost