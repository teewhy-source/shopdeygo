import React, { useContext } from "react";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import { CartContext } from "../../../context/Cartcontext";
import "./checkout.styles.scss";

const Checkoutitem = ({ cartitem }) => {
  const { name, imageUrl, price, quantity } = cartitem;
  const { clearitemfromcart, additemtocart, removetoitem } = useContext(CartContext);

  const clearItemHandler = () => clearitemfromcart(cartitem);
  const addItemHandler = () => additemtocart(cartitem);
  const removeItemHandler = () => removetoitem(cartitem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
        <FaMinusCircle />
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          <FaRegPlusSquare />
        </div>
      </span>
      <span className="price">${(price * quantity).toFixed(2)}</span>
      <div className="remove-button" onClick={clearItemHandler}>
      <FaTimesCircle />
      </div>
    </div>
  );
};

export default Checkoutitem;
