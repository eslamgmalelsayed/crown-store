// imports
import { createContext, useState, useEffect } from "react";
// AddItemsToCart
const AddItemsToCart = (cartItems, productToAdd) => {
    // check if item exists
    const existingItem = cartItems.find( (item) => item.id === productToAdd.id )
    // if exists +quantity
    if(existingItem) {
        return cartItems.map( (item) => item.id === productToAdd.id
            ? {...item, quantity: item.quantity + 1 }
            : item
            )
        }
    return [...cartItems, {...productToAdd, quantity: 1 }]
} 
// context
export const CartContext = createContext({
     cartItems : [],
     AddToCart : () => {},
     cartCount: 0
})
// provider
export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])
    // fire add to cart
    const AddToCart = (productToAdd) => {
        setCartItems(AddItemsToCart(cartItems,productToAdd))
    };
    // cart count
    const [cartCount,setCartCount] = useState(0)
    useEffect( () => {
        const newCartCount = cartItems.reduce((total,item) => total + item.quantity, 0)
        setCartCount(newCartCount)
    },[cartItems])
    const value = { setCartItems,AddToCart, cartItems, cartCount }
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}

 