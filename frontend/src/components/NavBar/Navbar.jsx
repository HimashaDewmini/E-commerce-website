import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../context/ShopContext';

const Navbar = () => {
  const location = useLocation(); // Get the current route
  const [menu, setMenu] = useState('');
  const {getTotalCartItems}=useContext(ShopContext);

  // Set active menu item based on URL path
  useEffect(() => {
    if (location.pathname.includes('/men')) setMenu('mens');
    else if (location.pathname.includes('/women')) setMenu('womens');
    else if (location.pathname.includes('/kids')) setMenu('kids');
    else setMenu('shop');
  }, [location]);

  return (
    <div>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="" />
          <p>SHOPPER</p>
        </div>
        <ul className="nav-menu">
          <li>
            <Link
              style={{ textDecoration: 'none' }}
              to="/"
              onClick={() => setMenu('shop')}
            >
              Shop
            </Link>
            {menu === 'shop' ? <hr /> : <></>}
          </li>
          <li>
            <Link
              style={{ textDecoration: 'none' }}
              to="/men"
              onClick={() => setMenu('mens')}
            >
              Men
            </Link>
            {menu === 'mens' ? <hr /> : <></>}
          </li>
          <li>
            <Link
              style={{ textDecoration: 'none' }}
              to="/women"
              onClick={() => setMenu('womens')}
            >
              Women
            </Link>
            {menu === 'womens' ? <hr /> : <></>}
          </li>
          <li>
            <Link
              style={{ textDecoration: 'none' }}
              to="/kids"
              onClick={() => setMenu('kids')}
            >
              Kids
            </Link>
            {menu === 'kids' ? <hr /> : <></>}
          </li>
        </ul>
        <div className="nav-login-cart">
          <Link to="/login"><button>Login</button></Link>
          <Link to="/cart"><img src={cart_icon} alt="" /></Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
