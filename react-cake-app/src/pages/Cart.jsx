import React, { useContext} from 'react'
import { MenuList } from '../helper/MenuList';
import {ShopContext} from '../context/shopContext'
import { CartItem } from './cartItem'
import { useNavigate } from 'react-router-dom'

import '../styles/cart.css'

export const Cart = () => {
	const { cartItems, getTotalCartAmount } = useContext(ShopContext)
	const totalAmount = getTotalCartAmount()

	const navigate = useNavigate()
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

		{totalAmount > 0 ? (
			<div className='checkout'>
				<p>Subtotal: ${totalAmount}</p>
				<button onClick={() => navigate('/menu')}>Continue Shopping</button>
				<button>Checkout</button>
			</div>
			) : (<h1>Your Cart is Empty</h1>)
		}
		</div>
	)
}
