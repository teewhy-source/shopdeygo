import React from 'react'
import {createContext,useState} from "react"

const addcartitem =(cartitems,producttoadd)=>{  // if found a match in the cartitem, then it will return a new array of cartitems  

//find if cartitems contain producttoadd
const exitingitem = cartitems.find(
    (cartitem)=>cartitem.id === producttoadd.id)

//if found, increase quantity
if (exitingitem){
    return cartitems.map((cartitem) =>
         cartitem.id === producttoadd.id ?
    { ...cartitem, quantity: cartitem.quantity + 1 }
     : cartitem
)

}
//return new array with modified cartitem
return [...cartitems, { ...producttoadd, quantity: 1 }];
}


export const CartContext = createContext({
    iscartopen:false,
    setiscartopen:()=>{},
    cartitems:[],
    additemtocart:()=>{}
})

export const CartProider =({children})=>{
    const [iscartopen, setiscartopen] = useState(false)
    const [cartitems,setcartitems] = useState([])

    const additemtocart =(producttoadd)=>{
        setcartitems(addcartitem (cartitems,producttoadd));
    }

    const value ={iscartopen,setiscartopen,additemtocart,cartitems}
return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}