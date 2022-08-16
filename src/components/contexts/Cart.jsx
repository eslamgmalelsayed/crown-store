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
// remove items from list
const removeItemsFromCart = (cartItems, productToReomve) => {
    // check if item exists
    const existingItem = cartItems.find( (item) => item.id === productToReomve.id )
    // if quantity = 1
    if (existingItem.quantity == 1) {
       return cartItems.filter(item => item.id  != productToReomve.id )
    }
    // return new obj
    return cartItems.map( (item) => item.id === productToReomve.id
    ? {...item, quantity: item.quantity - 1 }
    : item
    )
}
// clear all items
const clearItems = (cartItems, itemToClear) => {
    return cartItems.filter(item => item.id != itemToClear.id )
}
// context
export const CartContext = createContext({
     cartItems : [],
     AddToCart : () => {},
     removeFromCart : () => {},
     cartCount: 0,
     total: 0
})
// provider
export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([])
    // fire add to cart
    const AddToCart = (productToAdd) => {
        setCartItems(AddItemsToCart(cartItems,productToAdd))
    };
    // fire remove From cart
    const removeFromCart = (productToReomve) => {
        setCartItems(removeItemsFromCart(cartItems,productToReomve))
    };
const eraseAll = (itemToClear) => {
    setCartItems(clearItems(cartItems,itemToClear))
}
    // cart count
    const [cartCount,setCartCount] = useState(0)
    useEffect( () => {
        const newCartCount = cartItems.reduce((total,item) => total + item.quantity, 0)
        setCartCount(newCartCount)
    },[cartItems])
    // total
    const [total,setTotal] = useState(0)
    useEffect( () => {
        const newTotal = cartItems.reduce((total,item) => total + item.quantity * item.price , 0)
        setTotal(newTotal)
    },[cartItems])
    // return value
    const value = {
        setCartItems,
        AddToCart,
        cartItems,
        cartCount,
        removeFromCart,
        eraseAll,
        total
    }
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}

 