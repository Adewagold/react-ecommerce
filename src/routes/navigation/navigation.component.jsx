import { Outlet } from "react-router";
import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/crown.svg'
import './navigation.styles.scss'
import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import CardIcon from "../../components/cart-component/card-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";

const Navigation = () =>{
    const {currentUser} = useContext(UserContext);
    
    // console.log(currentUser);
    // const signOutHandler = async ()=>{
    //      await signOutUser();
    //      setCurrentUser(null)
    // }
    const {toggleDropDown}  = useContext(CartContext);

    return (
        <Fragment>
            <div className="navigation">
                <Link className='logo-container' to='/'>
                    <Logo className='logo'/>
                </Link>

                <div className='nav-links-container'>
                    <Link className="nav-link" to='/shop'>
                    SHOP
                    </Link>
                    <Link className="nav-link" to='/contact'>
                    CONTACT
                    </Link>
                    
                    {currentUser ? (
                        <span className='nav-link' onClick={signOutUser}>
                          SIGN OUT
                        </span>
                      ) : (
                        <Link className='nav-link' to='/auth'>
                          SIGN IN
                        </Link>
                      )}
                    <CardIcon/>
                </div>
                {toggleDropDown && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
    )
  }

export default Navigation;