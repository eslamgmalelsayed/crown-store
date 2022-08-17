// imports 
import { createContext, useState, useEffect} from "react";
import { getCats } from "../../utils/firebase/firebase.utils.js";

//  product Context
export const CatsContext = createContext({
    cats: {},
})

// provider
export const CatsProvider = ({children}) => {
    const [catsList, setCatsList] = useState({})
    useEffect(() => {
        const getCatsData = async () => {
           const catMap = await getCats()
           setCatsList(catMap)
        }
        getCatsData()

    }, [])
    const value = {catsList}
    return (
            <CatsContext.Provider value={value}>{children}</CatsContext.Provider>
        )
}