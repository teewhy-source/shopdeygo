import React from "react";
import { useContext } from "react";
import { CategoriesContext } from "../../context/Productcontext/CategoriesContext";
// import Productscard from "../../../PRODUCTSCARD/Productscard";
import CategoryPreview from "../categotypreview/CategoryPreview";
import "./Categories.styles.scss";


const CategoriesPreview= () => {
  const { categoriesmap } = useContext(CategoriesContext);
  return (
    < >
      {Object.keys(categoriesmap).map((title) => {
        const products = categoriesmap[title];
        return (
          <CategoryPreview keys={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
