import ButtonComponent from "../button-component/button.component";

import "./cart-dropdown.styles.scss"

import CartItem from "../cart-items/cart-item.component";


const CartDropdown = () =>{

    return (
            <div className="cart-dropdown-container">
                <div className="cart-items">
                    {[].map(cartItem => <CartItem item={cartItem}/>)}
                </div>
                <ButtonComponent>Go to checkout</ButtonComponent>
            </div>
    )
}

export default CartDropdown;