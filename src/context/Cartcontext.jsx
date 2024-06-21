
import { createContext, useState, useEffect, useReducer } from "react";
import  {createaction} from "../utility-files/firebase/reducer/Reducer"
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

const cartactiontypes ={ //i wrote a function so i wont make mistake when typing strings 
  SET_CART_ITEMS:'SET_CART_ITEMS',
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'
}

const InitialState = {
  iscartopen:false,
  cartitems:[],
  cartcount:0,
  carttotal:0
}

const cartreducer = (state,action) =>{
  const {type,payload}= action

  switch (type) {
    case cartactiontypes.SET_CART_ITEMS:
      
     return {
      ...state,...payload
     }
    case cartactiontypes.SET_IS_CART_OPEN:
      
     return {
      ...state, iscartopen:payload
     }
  
    default:
      throw new Error(`unhandled type of ${type} in cartreducer`)
  }
}


export const CartProvider = ({ children }) => {
  // const [iscartopen, setiscartopen] = useState(false);
  // const [cartitems, setcartitems] = useState([]);
  // const [cartcount, setcartcount] = useState(0);
  // const [carttotal, setcarttotal] = useState(0);

const [{cartitems,iscartopen,cartcount,carttotal,},dispatch] = useReducer(cartreducer,InitialState)





  // useEffect(() => {
  //   const newcartcount = cartitems.reduce(
  //     (total, cartitem) => total + cartitem.quantity,
  //     0
  //   );
  //   setcartcount(newcartcount);
  //   }, [cartitems]

  // );

  // useEffect(() => {
  //   const newcarttotal = cartitems.reduce(
  //     (total, cartitem) => total + cartitem.quantity * cartitem.price,
  //     0
  //   );
  //   setcarttotal(newcarttotal);
  // }, [cartitems]);



  const updatecartitemReducer = (newCartitems) =>{
    const newcartcount = newCartitems.reduce(
      (total, cartitem) => total + cartitem.quantity,
      0
    );

    const newcarttotal = newCartitems.reduce(
      (total, cartitem) => total + cartitem.quantity * cartitem.price,
      0
    );

    dispatch(
          createaction // this is a fuction coming from another component {reducer},
                      // an helper function that receives a type and a payload and all it does is to return back an object 
                      // const createaction = (type,payload)=>({type,payload}). so i wont have to type out those keys cause i can make mistakes  
       (cartactiontypes.SET_CART_ITEMS,
        {
          cartitems:newCartitems,
          carttotal:newcarttotal,
          cartcount:newcartcount
        }))
     }





  const additemtocart = (producttoadd) => {
    const newCartitems = addcartitem(cartitems, producttoadd);
    updatecartitemReducer(newCartitems)
  };


  const removetoitem = (cartitemtoremove) => {
    const newCartitems = removecartitem(cartitems, cartitemtoremove);
    updatecartitemReducer(newCartitems)
  };


  const clearitemfromcart = (cartitemtoclear) => {
    const newCartitems =  clearcartitem(cartitems, cartitemtoclear);
    updatecartitemReducer(newCartitems)
  };


  const setiscartopen = (bool) =>{
    dispatch(createaction(cartactiontypes.SET_IS_CART_OPEN,bool))
  }

  const value = {
    iscartopen,
    setiscartopen ,
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
