import React from "react";
import { useContext } from "react";
import { ProductsContext } from "../../../context/Productcontext/Productcontext";
import Productscard from "../../../PRODUCTSCARD/Productscard";
import "./shop.styles.scss"
const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
    {
      products.map((product) => (
        <Productscard key={product.id} product={product}/>
      ))
    }
  </div>
);
};

export default Shop;
