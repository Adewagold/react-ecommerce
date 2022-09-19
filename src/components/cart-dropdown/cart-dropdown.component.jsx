import ButtonComponent from "../button-component/button.component";
import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./cart-dropdown.styles.scss"

import CartItem from "../cart-items/cart-item.component";
import { useNavigate } from "react-router";


const CartDropdown = () =>{
    const {cartItems} = useContext(CartContext)
    console.log("cart items")
    console.log(cartItems);
    const navigate = useNavigate()

    const goToCheckoutHandler = ()=>{
        navigate('/checkout')
    }

    return (
            <div className="cart-dropdown-container">
                <div className="cart-items">
                {cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem}/>)}
                </div>
                <ButtonComponent onClick={goToCheckoutHandler}>Go to checkout</ButtonComponent>
            </div>
    )
}

export default CartDropdown;