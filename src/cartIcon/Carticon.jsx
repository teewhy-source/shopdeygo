import React from "react";
import {useContext} from "react"
import { CartContext } from "../context/Cartcontext";
import shopicon from "../assets/images/shoppingbag.png"
import "./Carticon.styles.scss";
const Carticon = () => {
    const {iscartopen, setiscartopen, cartcount} = useContext(CartContext)
    const toggleiscartopen = ()=>setiscartopen(!iscartopen)
  return (
    <div className="cart-icon-container" onClick={toggleiscartopen}>
    <img src={shopicon} alt="" className="image" style={{ maxWidth: '3rem', height: '3rem' }} />
      <span className="item-count">{cartcount}</span>
    </div>
  );
};

export default Carticon;
