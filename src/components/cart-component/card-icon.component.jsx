import "./cart-icon.styles.scss"
import { useContext } from "react";
import {ReactComponent as ShoppingBag} from "./shopping-bag.svg";
import { ToggleDropDownContext } from "../../contexts/toggle-dropdown.context";
const CardIcon = ()=>{

    const {toggleDropDown, setToggleDropDown} = useContext(ToggleDropDownContext);
    const toggleCartDropDown = () => setToggleDropDown(!toggleDropDown);
    return(<div className="cart-icon-container">
        <ShoppingBag className="shopping-icom" onClick={toggleCartDropDown}/>
        <span className="item-count">0</span>
        </div>)

}

export default CardIcon;