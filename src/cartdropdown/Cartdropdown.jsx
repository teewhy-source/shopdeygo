import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/Cartcontext";
import { FaCartArrowDown } from "react-icons/fa6";
import {useNavigate} from "react-router-dom"
import "./cartdropdown.scss";
import { CiShoppingCart } from "react-icons/ci";
import Button from "../button/Button";
import Cartitem from "../component/cartitem/Cartitem";
import { FaRegSadTear } from "react-icons/fa";
export const Cartdropdown = () => {
  const { cartitems } = useContext(CartContext);
  const navigate = useNavigate()
   const gotocheckouthandler =()=>{
    navigate("/checkout")
   }
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {
          cartitems.length ?  
              (cartitems.map((item) => (
            <Cartitem key={item.id} cartitem={item} />
          ))) :(
            <span> <FaRegSadTear /><br />
             your cart <CiShoppingCart/> is empty, pls fill in up with some items<FaCartArrowDown/>  </span>
          )
        }
   
      </div>

      <Button onClick={gotocheckouthandler}>CHECKOUT </Button>
    </div>
  );
};
