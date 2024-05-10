import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/Cartcontext";
import {useNavigate} from "react-router-dom"
import "./cartdropdown.scss";
import Button from "../button/Button";
import Cartitem from "../component/cartitem/Cartitem";

export const Cartdropdown = () => {
  const { cartitems } = useContext(CartContext);
  const navigate = useNavigate()
   const gotocheckouthandler =()=>{
    navigate("/checkout")
   }
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartitems.map((item) => (
          <Cartitem key={item.id} cartitem={item} />
        ))}
      </div>

      <Button onClick={gotocheckouthandler}>CHECKOUT </Button>
    </div>
  );
};
