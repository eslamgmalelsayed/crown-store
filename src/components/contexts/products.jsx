// imports 
import { createContext, useState} from "react";
import PRODUCTS from '../shop-data.json'
//  product Context
export const ProductsContext = createContext({
    productsList: []
})
// provider
export const ProductsProvider = ({children}) => {
    const [productsList, setProductsList] = useState(PRODUCTS)
    const value = {productsList}
    return (
            <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
        )
}