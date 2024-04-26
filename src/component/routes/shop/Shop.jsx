import React from "react";
import Shopdata from "../../../Shopdata.json";
import "./shop.styles.scss";
const Shop = () => {
  return (
    <div className="shop-container ">
      {Shopdata.map(({ id, title, price,  image,  }) => (
        <div key={id} className="shop-item ">
            <div className="item-image">
            <img src={image} alt="" srcset="" />
            
          </div>
          <div className="item-content">
            <h1>{title}</h1>
            <h1> Price: #{price},000</h1>
            
            
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default Shop;
