import "./productscard.styles.scss";
import Button from "../button/Button";
import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/Cartcontext";
const Productscard = ({ product }) => {
    const { name, price, image } = product;
    console.log(product);
    const { additemtocart} = useContext(CartContext);
  
    const addproducttocart = () => additemtocart(product);
    return (
      <div className="product-card-container">
        <img src={image} alt={`Product: ${name}`} />
        <div className="footer">
          <span className="name">{name}</span>
          <span className="price">Price: ${price}</span> 
        </div>
        <Button buttonType="inverted" onClick={addproducttocart}>
          ADD TO CART
        </Button>
      </div>
    );
  };

export default Productscard;
