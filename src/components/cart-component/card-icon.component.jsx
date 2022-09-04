import "./cart-icon.styles.scss"
import { useContext } from "react";
import {ReactComponent as ShoppingBag} from "./shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";


const CardIcon = ()=>{

    const {totalCartItems, toggleDropDown, setToggleDropDown} = useContext(CartContext);
    const toggleCartDropDown = () => setToggleDropDown(!toggleDropDown);
    
    return(<div className="cart-icon-container">
        <ShoppingBag className="shopping-icom" onClick={toggleCartDropDown}/>
        <span className="item-count">{totalCartItems}</span>
        </div>)

}

export default CardIcon;