// React Router Imports
import {Outlet, Link} from 'react-router-dom';
// Style Imports
import './navbar.styles.scss';
// Component Imports
// import { ReactComponent as Logo } from '../../assets/logo.svg';


const Navbar = () => {
    return (
      <>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                LOGO
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                    SHOP
                </Link>
            </div>
        </div>
        <Outlet />
      </>
    );
}

export default Navbar;