import { Outlet } from "react-router";
import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/crown.svg'
import './navigation.styles.scss'
import { UserContext } from "../../contexts/user.context";

const Navigation = () =>{
    const {currentUser} = useContext(UserContext);

    console.log(currentUser);

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
                    <Link className="nav-link" to='/shop'>
                    CONTACT
                    </Link>
                    <Link className="nav-link" to='/auth'>
                    {currentUser && ('SIGN OUT')}
                    
                    </Link>
                </div>
            </div>
            
            <Outlet />
        </Fragment>
    )
  }

export default Navigation;