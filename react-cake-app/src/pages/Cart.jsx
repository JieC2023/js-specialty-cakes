import React, { useContext} from 'react'
import { MenuList } from '../helper/MenuList';
import {ShopContext} from '../context/shopContext'
import { CartItem } from './cartItem'
import '../styles/cart.css'

export const Cart = () => {
	const { cartItems } = useContext(ShopContext)

	return (
		<div className='cart'>
			<div>
				<h1> Your Cart Items</h1>
			</div>
			<div className='cartItems'>
				{MenuList.map((item) => {
					if (cartItems[item.id] !==0) {
						return <CartItem data={item}/>
					}
				})}
			</div>

			<div className='checkout'>
			<p>Subtotal: $</p>
				<button>Continue Shopping</button>
				<button>Checkout</button>
			</div>

		</div>
	)
}
