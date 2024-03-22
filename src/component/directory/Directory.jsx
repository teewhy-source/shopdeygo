import React from 'react'
import Categoryitem from "../Categoryitem/Categoryitem"
import "./directory.styles.scss"
const Directory = ({ categories }) => {
    return (
      <div className="directory-container">
        {categories.map((category) => (
          <Categoryitem key={category.id} category={category} />
        ))}
      </div>
    );
  };
  
  export default Directory; 