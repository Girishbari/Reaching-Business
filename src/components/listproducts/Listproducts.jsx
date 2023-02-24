import React from 'react'
import './listproducts.css'
import { useNavigate, useParams } from "react-router-dom";
import Showproduct from '../showproduct/Showproduct';

const Listproducts = (props) => {

  const navigate = useNavigate();

  return (
    <div className="rb__listproducts">
      <div className="rb__listproducts-products">
        <div className="rb__listproducts-products_cards" 
             onClick={() => {
              props.handleProductClick();
              navigate("/Showproduct");
              }
              }>
          <img src={props.image} />
          <h3>{props.name}</h3>
        </div>
      </div>
    </div>
  )
}

export default Listproducts