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

const removeCartItem = (cartItems, cartItemToRemove) =>{
    //find the cart item to remove
    const existingCartItem = cartItems.find((cartItem)=>cartItem.id === cartItemToRemove.id);
    //check if qty is equal to 1, remove that item from the cart
    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }
    //if it isn't, return cart item with matchin cart item with reduced quantity
    return cartItems.map((cartItem)=> cartItem.id === cartItemToRemove.id 
        ? {...cartItem, quantity: cartItem.quantity - 1} 
        : cartItem
    );
}

const deleteItemFromCart = (cartItems, itemToDelete)=>{
        return cartItems.filter(cartItem => cartItem.id !== itemToDelete.id);
}

export const CartContext = createContext({
    toggleDropDown:false,
    setIsCartOpen: ()=>{},
    cartItems:[],
    addItemToCart:()=>{},
    removeItemFromCart: ()=>{},
    clearCartItem: ()=>{},
    totalCartItems:0,
    total:0
});

export const CartProvider = ({children}) =>{
    console.log("Log toggle dropdown context");
    const [toggleDropDown, setToggleDropDown] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalCartItems, setTotalCartItems] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(()=>{
        const newCartCount = cartItems.reduce((total, cartItem)=>total+cartItem.quantity, 0)
        setTotalCartItems(newCartCount)
    })

    useEffect(()=>{
        const newCartTotal = cartItems.reduce((total, cartItem)=>total+cartItem.quantity * cartItem.price,0)
        setTotal(newCartTotal)
    })

    const addItemToCart =(productToAdd)=>{
        setCartItems(itemsToAdd(cartItems,productToAdd));
    }

    const removeItemFromCart = (cartItemToRemove)=>{
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
    }

    const clearCartItem = (itemToDelete)=>{
        setCartItems(deleteItemFromCart(cartItems, itemToDelete))
    }

    const value={toggleDropDown, 
        setToggleDropDown, 
        addItemToCart, 
        cartItems, 
        totalCartItems, 
        removeItemFromCart, 
        clearCartItem,
        total
    };
    
    
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
