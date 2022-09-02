import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../routes/shop/data.json"

export const ProductContext = createContext({
    products:[],
});

export const ProductsProvider = ({children}) =>{
    console.log("Log product context");
    const [products, setProducts] = useState(SHOP_DATA);
    const value={products};
    
    // useEffect(() => {
    //     console.log("Products")
    //     setProducts(SHOP_DATA)
    // }, []);

    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}