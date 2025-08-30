import { Children, createContext, useContext, useState } from "react";

const cartContext = createContext()
export function CartProvider({Children}){
    const [cartItems, setCartItems] = useState([])
    const addToCart  = (product)=>{
        setCartItems(prev =>[...prev, product])
    }
    return (
        <cartContext.Provider value={{cartItems, addToCart}}>
            {Children}
        </cartContext.Provider>
    ) 
}

export function useCart(){
    return useContext(cartContext)
}