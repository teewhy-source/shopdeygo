import React from "react";
import "./checkout.styles.scss"
const Checkoutitem = ({ cartitem }) => {
  const { title, image, price, quantity } = cartitem;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={image} alt={`${title}`} srcset="" />
      </div>
      <span className="name">{title}</span>
      <span className="quantity">{quantity}</span>

      <span className="price">{price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

export default Checkoutitem;
