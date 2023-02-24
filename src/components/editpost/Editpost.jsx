import React from 'react'
import './editpost.css'
import { IoMdArrowBack } from 'react-icons/io'

const Editpost = (props) => {
  return (
    <div className='rb__product'>

      <div className='rb__product-heading'>
        <IoMdArrowBack size={27} className='rb__product-heading_back '  onClick={props.handleClick}/>
        <h2>Add Product</h2>
      </div>
      <div className="rb__product-container">
        <div className="rb__product-photos">
          <h4>Main Image</h4>
          <form action="/action_page.php">
            <input type="file" id="myFile" name="filename" />
            <input type="submit" id='submit' />
          </form>
          <div className='rb__product-photos_other'>
            <h4 >Other Images</h4>
            <form action="/action_page.php">
              <input type="file" id="myFile" name="filename" />
              <input type="submit" id='submit' />
            </form>
          </div>

        </div>
        <div className="rb__product-desc">
          <div className="rb__product-desc_name">
            <h4>Product Name</h4>
            <input type='text' placeholder='Name' />
          </div>
          <div className="rb__product-desc_details">
            <h4>Product Details</h4>
            <textarea type='text' placeholder='Details' />
          </div>
          <div className="rb__product-desc_pricing">
            <h4>Product Price</h4>
            <input type='text' placeholder='Price' />
            <input type='text' placeholder='MRP' />
          </div>
          <div className='rb__product-desc_quantity'>
            <h4>Product Quantity</h4>
            <input type='number' placeholder='10' />
          </div>
        </div>
      </div>

      <div className='rb__product-upload'>
        <button>Upload</button>
      </div>


    </div>
  )
}

export default Editpost