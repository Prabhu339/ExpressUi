import { createContext, useContext, useState } from "react";






const CartContext=createContext()
 export const CartProvider=({children})=>{
  const [CartItems,setCartItems]=useState([])


  const addToCart =(item)=>{
setCartItems([...CartItems,item])
  }

  const RemoveFromCart=(item)=>{
setCartItems(CartItems.filter((apple)=>apple!==item))
  }

  return(
    <CartContext.Provider value={{CartItems,addToCart,RemoveFromCart}}>
    {children}
    </CartContext.Provider>
  )
}

export const useCart=()=>{
return useContext(CartContext)
}