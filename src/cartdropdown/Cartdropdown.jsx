import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/Cartcontext";
import "./cartdropdown.scss";
import Button from "../button/Button";
import Cartitem from "../component/cartitem/Cartitem";

export const Cartdropdown = () => {
  const { cartitems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartitems.map((item) => (
          <Cartitem key={item.id} cartitem={item} />
        ))}
      </div>

      <Button>CHECKOUT </Button>
    </div>
  );
};
