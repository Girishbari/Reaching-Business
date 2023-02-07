import React from 'react'
import './listproducts.css'
import image from '../../assets/post2.png'

const Listproducts = (props) => {
  return (
    <div className="rb__listproducts">
      <div className="rb__listproducts-products">
        <div className="rb__listproducts-products_cards" onClick={() => props.handleProductClick()}>
          <img src={props.image} />
          <h3>{props.name}</h3>
        </div>
      </div>
    </div>
  )
}

export default Listproducts