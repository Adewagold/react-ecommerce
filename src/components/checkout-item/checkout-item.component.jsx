import './checkout-item.styles.scss'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({cartItem})=>{
    const {clearCartItem, addItemToCart, removeItemFromCart} = useContext(CartContext);

    const {name, imageUrl, price, quantity} = cartItem;
    
    const increaseCart = () => addItemToCart(cartItem);
    const decreaseCart  = ()=> removeItemFromCart(cartItem);

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
            <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
            <div className="arrow" onClick={decreaseCart}>
                &#10094;
            </div>
           <span className="value">{quantity}</span>
            <div className="arrow" onClick={increaseCart}>
                &#10095;
            </div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={()=>clearCartItem(cartItem)}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;