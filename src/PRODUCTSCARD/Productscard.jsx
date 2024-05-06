import "./productscard.styles.scss"
import Button from "../button/Button"
import React from 'react'

const Productscard = ({ product }) => {
    const {  title, price, image } = product;
    return (
        <div className="product-card-container">
            <img src={image} alt={`${title}`} />
            <div className="footer">
                <span className="name">{title}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttontype="inverted">Add to cart</Button>
        </div>
      
    );
  };

export default Productscard