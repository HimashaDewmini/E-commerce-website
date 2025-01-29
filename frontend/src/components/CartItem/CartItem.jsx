import React, { useContext } from 'react';
import './CartItem.css';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItem = () => {
    const { getTotalCartAmount,all_product, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {Object.keys(cartItems).map((id) => {
                const item = all_product.find((product) => product.id === Number(id));
                if (!item) return null;
                return (
                    <div key={id}>
                        <div className="cartitems-format cartitems-format-main">
                            <img src={item.image} alt={item.name} className="carticon-product-icon" />
                            <p>{item.name}</p>
                            <p>${item.new_price}</p>
                            <button className="cartitems-quantity">{cartItems[id]}</button>
                            <p>${item.new_price * cartItems[id]}</p>
                            <img
                                src={remove_icon}
                                onClick={() => removeFromCart(Number(id))}
                                alt="Remove Item"
                                className="cart-remove-icon"
                            />
                        </div>
                        <hr />
                    </div>
                );
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>

                        </div>
                        <hr/>
                        <div className="cartitems-total-item">
                            <p>Shipping free</p>
                            <p>free</p>
                        </div>
                        <hr/>
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cart-items-promocode">
                    <p> if you have a promo code, enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder="promocode" className="" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
