import React from "react";
import { useContext } from "react";
import { CartContext } from "../../../context/Cartcontext";
import "./checkout.styles.scss";
const Checkoutitem = ({ cartitem }) => {
  const {name, imageUrl , price, quantity } = cartitem;
  const { clearitemfromcart, additemtocart, removetoitem } = useContext(CartContext);
  const cleartitemhandler = () => clearitemfromcart(cartitem);
  const additemhandler = () => additemtocart(cartitem);
  const removeitemhandler = () => removetoitem(cartitem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} srcset="" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeitemhandler}>
          &#10094;
        </div>

        <span className="value">{quantity}</span>

        <div className="arrow" onClick={additemhandler}>
          &#10095;
        </div>
      </span>

      <span className="price">{price}</span>
      <div className="remove-button" onClick={cleartitemhandler}>
        &#10005;
      </div>
    </div>
  );
};

export default Checkoutitem;
