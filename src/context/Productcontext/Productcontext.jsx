import React from 'react'
import { createContext,useState } from 'react'
import PRODUCTSJASON from "../../Shopdata.json"

export const ProductsContext = createContext ({
    products:[]
})

export const ProductsProvider = ({children})=>{
    const  [products, setproducts] = useState(PRODUCTSJASON)//coming from my jason
    const value = {products}
    return(
        <ProductsContext.Provider value={value}>
            {children}
            </ProductsContext.Provider>
    )
}