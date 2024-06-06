import React from "react";
import { createContext, useState, useEffect } from "react";

const addcartitem = (cartitems, producttoadd) => {
  // if found a match in the cartitem, then it will return a new array of cartitems

  //find if cartitems contain producttoadd
  const exitingitem = cartitems.find(
    (cartitem) => cartitem.id === producttoadd.id
  );

  //if found, increase quantity
  if (exitingitem) {
    return cartitems.map((cartitem) =>
      cartitem.id === producttoadd.id
        ? { ...cartitem, quantity: cartitem.quantity + 1 }
        : cartitem
    );
  }
  //return new array with modified cartitem
  return [...cartitems, { ...producttoadd, quantity: 1 }];
};

// the decreament function
const removecartitem = (cartitems, cartitemtoremove) => {
  // find the cart item to remove
  const exitingitem = cartitems.find(
    (cartitem) => cartitem.id === cartitemtoremove.id
  );
  // check if quantity is equal to 1, if it is, remove/ reduce that item from the cart
  if (exitingitem.quantity === 1) {
    return cartitems.filter((cartitem) => cartitem.id !== cartitemtoremove.id);
  }

  //return back cartitems with matching cart with reduced quantity

  return cartitems.map((cartitem) =>
    cartitem.id === cartitemtoremove.id
      ? { ...cartitem, quantity: cartitem.quantity - 1 }
      : cartitem
  );
};

const clearcartitem = (cartitems, cartitemtoclear) =>
  cartitems.filter((cartitem) => cartitem.id !== cartitemtoclear.id);

export const CartContext = createContext({
  iscartopen: false,
  setiscartopen: () => {},
  cartitems: [],
  additemtocart: () => {},
  removeitemfromcart: () => {},
  cartcount: 0,
  clearitemfromcart: () => {},
  carttotal: 0,
});

export const CartProvider = ({ children }) => {
  const [iscartopen, setiscartopen] = useState(false);
  const [cartitems, setcartitems] = useState([]);
  const [cartcount, setcartcount] = useState(0);
  const [carttotal, setcarttotal] = useState(0);

  useEffect(() => {
    const newcartcount = cartitems.reduce(
      (total, cartitem) => total + cartitem.quantity,
      0
    );
    setcartcount(newcartcount);
  }, [cartitems]);

  useEffect(() => {
    const newcarttotal = cartitems.reduce(
      (total, cartitem) => total + cartitem.quantity * cartitem.price,
      0
    );
    setcarttotal(newcarttotal);
  }, [cartitems]);

  const additemtocart = (producttoadd) => {
    setcartitems(addcartitem(cartitems, producttoadd));
  };

  const removetoitem = (cartitemtoremove) => {
    setcartitems(removecartitem(cartitems, cartitemtoremove));
  };

  const clearitemfromcart = (cartitemtoclear) => {
    setcartitems(clearcartitem(cartitems, cartitemtoclear));
  };

  const value = {
    iscartopen,
    setiscartopen,
    additemtocart,
    removetoitem,
    cartitems,
    cartcount,
    clearitemfromcart,
    total: 0,
    carttotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
