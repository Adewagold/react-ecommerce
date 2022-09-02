import { createContext, useEffect, useState } from "react";

const itemsToAdd = (addItemToCart, productToAdd)=>{
    //Find if addItem contains product to add
    //if found, increment qty
    //return new arrau with modified cartItems
}
export const ToggleDropDownContext = createContext({
    toggleDropDown:false,
    cartItems:[],
    addItemToCart:()=>{}
});

export const ToggleDropDownProvider = ({children}) =>{
    console.log("Log toggle dropdown context");
    const [toggleDropDown, setToggleDropDown] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const value={toggleDropDown, setToggleDropDown};
    const addItemToCart =(productToAdd)=>{
        setCartItems(itemsToAdd(cartItems,productToAdd));
    }
    
    return <ToggleDropDownContext.Provider value={value}>{children}</ToggleDropDownContext.Provider>
}

// {id, name, price, image, quantity}