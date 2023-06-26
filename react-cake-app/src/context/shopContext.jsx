import React, {createContext, useState} from 'react';
import { MenuList } from '../helper/MenuList'

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < MenuList.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
	const [cartItems, setCartItems] = useState(getDefaultCart());

	const getTotalCartAmount = () => {
		let totalAmount = 0
		for (const purchasedItem in cartItems) {
			if (cartItems[purchasedItem] > 0) {
				let itemInfo = MenuList.find((item) => item.id === Number(purchasedItem))
				totalAmount += cartItems[purchasedItem] * itemInfo.price
				// console.log(itemInfo)
			}
		}
		return totalAmount
	}
	
	const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

	const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
	
	const updateCartItemCount = (newAmount, itemId) => [
		setCartItems((prev) => ({ ...prev, [itemId]: newAmount }))
	]

	const contextValue = {
		cartItems, 
		addToCart, 
		removeFromCart, 
		updateCartItemCount, 
		getTotalCartAmount
	}

	console.log(cartItems)

	return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}





