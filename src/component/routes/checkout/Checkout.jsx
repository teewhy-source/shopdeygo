import React from "react";
import "./checkout.styles.scss";
import { useContext } from "react";
import Checkoutitem from "../../cartitem/checkoutitem/Checkoutitem";
import { CartContext } from "../../../context/Cartcontext";
const Checkout = () => {
  const { cartitems,carttotal  } = useContext(CartContext);
  return (


    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span> product</span>
        </div>

        <div className="header-block">
          <span> description</span>
        </div>

        <div className="header-block">
          <span> quantity</span>
        </div>

        <div className="header-block">price</div>

        <div className="header-block">
          <span> remove</span>
        </div>
      </div>

      {cartitems.map((cartitem) =>(
         <Checkoutitem key={cartitem.id} cartitem={cartitem}/>
      
      ))}
      <span className="total">Total:#{carttotal}</span>
    </div>
  );
};

export default Checkout;
