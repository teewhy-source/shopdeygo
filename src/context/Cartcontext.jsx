import React from 'react'
import {createContext,useState} from "react"




export const CartContext = createContext({
    iscartopen:false,
    setiscartopen:()=>{}
})

export const CartProider =({children})=>{
    const [iscartopen, setiscartopen] = useState(false)
    const value ={iscartopen,setiscartopen}
return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}