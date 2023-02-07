import React from 'react'
import './search.css'
import image from '../../assets/post3.png'
import image2 from '../../assets/post4.png'


const Search = () => {
  return (
    <div className='rb__search'>
      <input type='text' placeholder='Type to Search'/>
      <div className='rb__search-list'>
        <div className="rb_search-list_childs">
        <img src={image} />
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium laborum optio debitis possimus. Iure error, excepturi similique iste vero nihil provident atque? Sit, sed nesciunt?</h2>
        </div>
        <div className="rb_search-list_childs">
        <img src={image2} />
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium laborum optio debitis possimus. Iure error, excepturi similique iste vero nihil provident atque? Sit, sed nesciunt?</h2>
        </div>
        <div className="rb_search-list_childs">
        <img src={image} />
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium laborum optio debitis possimus. Iure error, excepturi similique iste vero nihil provident atque? Sit, sed nesciunt?</h2>
        </div>
        <div className="rb_search-list_childs">
        <img src={image} />
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium laborum optio debitis possimus. Iure error, excepturi similique iste vero nihil provident atque? Sit, sed nesciunt?</h2>
        </div>
       
      </div>
    </div>
  )
}

export default Search