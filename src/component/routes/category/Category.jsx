import React from "react";
import { useParams } from "react-router-dom";
import { BsEmojiSmile } from "react-icons/bs";
import { useContext, useEffect, useState, Fragment } from "react";
import { CategoriesContext } from "../../../context/Productcontext/CategoriesContext";
import Productscard from "../../../PRODUCTSCARD/Productscard";
import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const { categoriesmap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("Category from URL params:", category);
    console.log("Categories Map from context:", categoriesmap);

    if (category) {
      const categoryProducts = categoriesmap[category];
      if (categoryProducts) {
        setProducts(categoryProducts);
      } else {
        console.warn(`Category "${category}" not found in categories map.`);
        setProducts([]);
      }
    }
  }, [category, categoriesmap]);

  if (!category) {
    return <p>Category not found</p>;
  }

  return (
    <Fragment>
      <h2 className="category-title">
      <BsEmojiSmile /> {category.toLocaleUpperCase()} <BsEmojiSmile />
      </h2>

      <div className="category-container">
        {products.length > 0 ? (
          products.map((product) => (
            <Productscard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div>
    </Fragment>
  );
};

export default Category;
