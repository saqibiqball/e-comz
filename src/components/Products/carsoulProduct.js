import React from "react";
import './productStyle.css'
export default function CarouselProduct(props) {
  return (
    <div className="card">
      <img className="product--image" src={props.url} alt="product image" />
      <p style={{fontWeight:"bold"}}>{props.name}</p>
      <p className="price">{props.price}</p>
      <p>{props.description}</p>
      <p>
        <button>Add to Cart</button>
      </p>
    </div>
  );
}
