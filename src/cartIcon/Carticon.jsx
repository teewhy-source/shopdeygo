import React, { useContext } from "react";
import { CartContext } from "../context/Cartcontext";
import { FaTimes } from "react-icons/fa";
import shopicon from "../assets/images/shoppingbag.png";
import "./Carticon.styles.scss";

const Carticon = () => {
  const { iscartopen, setiscartopen, cartcount } = useContext(CartContext);
  const toggleiscartopen = () => setiscartopen(!iscartopen);

  return (
    <div className="cart-icon-container" onClick={toggleiscartopen}>
      {iscartopen ? (
        <FaTimes className="icon" style={{ maxWidth: '3rem', height: '3rem', }} />
      ) : (
        <img src={shopicon} alt="Shopping Icon" className="image" style={{ maxWidth: '3rem', height: '3rem' }} />
      )}
      <span className="item-count">{cartcount}</span>
    </div>
  );
};

export default Carticon;
