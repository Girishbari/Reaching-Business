import React from 'react'
import './showproduct.css'
import image from '../../assets/post2.png'
import { MdOutlineStar, MdOutlineStarOutline } from 'react-icons/md'
import { useState } from 'react'

const Showproduct = () => {




    return (
        <div className='rb__showproduct'>
            <div className='rb__showproduct-card'>
                <img src={image} />
                <div className="rb__showproduct-card_content">

                    <h3> Hardware</h3>
                    <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam, est.</p>
                    <div className="rb__showproduct-card_content-rating">
                        <input type="radio" id="star5" name="rate" value="5" />
                        <label for="star5" title="text">5 stars</label>
                        <input type="radio" id="star4" name="rate" value="4" />
                        <label for="star4" title="text">4 stars</label>
                        <input type="radio" id="star3" name="rate" value="3" />
                        <label for="star3" title="text">3 stars</label>
                        <input type="radio" id="star2" name="rate" value="2" />
                        <label for="star2" title="text">2 stars</label>
                        <input type="radio" id="star1" name="rate" value="1" />
                        <label for="star1" title="text">1 star</label>
                    </div>
                </div>

            </div>
            <div className='rb__showproduct-comment'>
                <div className="rb__showproduct-comment_container">
                    <img src={image} alt="" className="src" />
                    <div className="rb__showproduct-comment-containe_comment">
                        <h4>User</h4>
                        <p>Good</p>
                    </div>
                </div>
                <h3>No Comment</h3>
                <div className="rb__showproduct-comment_box">
                <img src={image} />
                <input className='"rb__showproduct-comment_box-input' placeholder='Comment here'/>
                <button>Comment</button>
            </div>
            </div>
          
        </div>
    )
}

export default Showproduct