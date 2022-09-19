import './checkout-item.styles.scss'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({cartItem})=>{
    const {clearCartItem} = useContext(CartContext);

    const {name, imageUrl, price, quantity} = cartItem;

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
            <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={()=>clearCartItem(cartItem)}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;