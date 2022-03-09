// import { createContext, useContext } from "react";
// import { useCart } from "./custom-hooks";

// const CartContext = createContext()

// export const CartProvider = ({children}) => {
//     const [cart, dispatchCart] = useCart()

//     console.log(cart)

//     return(
//         <CartContext.Provider value={[cart, dispatchCart]}>{children}</CartContext.Provider>
//     )
// }

// export const useCartItems = () => useContext(CartContext)