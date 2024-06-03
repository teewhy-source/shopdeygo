import React from 'react';
import "./button.styles.scss";

/* The types of button I need: 
   default button, 
   inverted button, 
   google sign-in button 
*/

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted"
};

export const Button = ({ children, buttontype, ...OtherProps }) => {
  return (
    <button className={`button-container ${BUTTON_TYPE_CLASSES[buttontype]}`} {...OtherProps}>
      {children}
    </button>
  );
};

export default Button;
