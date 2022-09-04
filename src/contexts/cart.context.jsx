import { createContext, useContext, useEffect, useState } from "react";

const itemsToAdd = (cartItems, productToAdd)=>{
    //Find if addItem contains product to add
    
    const existingCartItem = cartItems.find((cartItem)=>cartItem.id === productToAdd.id);

    //if found, increment qty
    if(existingCartItem){
        
        return cartItems.map((cartItem)=> cartItem.id === productToAdd.id ?
        {...cartItem, quantity: cartItem.quantity + 1} : cartItem
        );
    }
    //return new arrau with modified cartItems
    // [{...productToAdd, quantity:1}]
    return [...cartItems, {...productToAdd, quantity:1}];
}

export const CartContext = createContext({
    toggleDropDown:false,
    setIsCartOpen: ()=>{},
    cartItems:[],
    addItemToCart:()=>{},
    totalCartItems:0
});

export const CartProvider = ({children}) =>{
    console.log("Log toggle dropdown context");
    const [toggleDropDown, setToggleDropDown] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalCartItems, setTotalCartItems] = useState(0);

    useEffect(()=>{
        const newCartCount = cartItems.reduce((total, cartItem)=>total+cartItem.quantity, 0)
        setTotalCartItems(newCartCount)
    })

    const addItemToCart =(productToAdd)=>{
        setCartItems(itemsToAdd(cartItems,productToAdd));
    }

    const value={toggleDropDown, setToggleDropDown, addItemToCart, cartItems, totalCartItems};
    
    
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
