import React, { useState, useEffect, useContext,useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../context/ShopContext';
import nav_dropdown from "../Assets/dropdown_icon.png";

const Navbar = () => {
  const location = useLocation(); // Get the current route
  const [menu, setMenu] = useState('');
  const {getTotalCartItems}=useContext(ShopContext);
  const menuRef =useRef();

  const dropdown_toggle=(e)=>{
      menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');
  }

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
    <img onClick={dropdown_toggle} src={nav_dropdown} alt="" className="nav-dropdown" />

        <ul ref={menuRef} className="nav-menu">
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
