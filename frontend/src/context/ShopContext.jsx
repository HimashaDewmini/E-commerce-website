import React, { createContext, useState } from "react";
import all_product from "../components/Assets/all_product"; // ✅ Ensure this path is correct

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState({});

    // Function to add item to cart
    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1,
        }));
    };

    // Function to remove one quantity of an item
    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            if (!prev[itemId]) return prev;
            const newCart = { ...prev };
            newCart[itemId] = Math.max(prev[itemId] - 1, 0);
            if (newCart[itemId] === 0) delete newCart[itemId];
            return newCart;
        });
    };

    // Function to delete item completely from cart
    const deleteFromCart = (itemId) => {
        setCartItems((prev) => {
            const newCart = { ...prev };
            delete newCart[itemId];
            return newCart;
        });
    };

    // Function to calculate total items in cart
    const getTotalCartItems = () => {
        return Object.values(cartItems).reduce((total, count) => total + count, 0);
    };

    // Function to calculate total cart price
    const getTotalCartAmount = () => {
        return Object.keys(cartItems).reduce((total, itemId) => {
            const product = all_product.find((p) => p.id === Number(itemId));
            return total + (product ? product.new_price * cartItems[itemId] : 0);
        }, 0);
    };

    const getTotalCartItem=()=>{
        let totalItem=0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem+=cartItems[item];
            }
        }
        return totalItem;
    }
    // Context value for provider
    const contextValue = {
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        deleteFromCart,
        getTotalCartItems,
        getTotalCartAmount,
        getTotalCartItem
    };

    

    return <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
