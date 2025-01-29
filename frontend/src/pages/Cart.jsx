import React, { useContext } from 'react';
import CartItem from '../components/CartItem/CartItem';
import { ShopContext } from '../context/ShopContext';

const Cart = () => {
  const { getTotalCartAmount, cartItems } = useContext(ShopContext);

  return (
    <div className='cart'>
      <h2>Shopping Cart</h2>
      {Object.keys(cartItems).length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <CartItem />
          
        </>
      )}
    </div>
  );
};

export default Cart;
