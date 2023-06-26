import React, { useContext } from 'react'
import {ShopContext} from '../context/shopContext'

export const CartItem = (props) => {
	const { id, name, image, price } = props.data
	const { cartItems, addToCart, removeFromCart } = useContext(ShopContext)

	return (
		<div className='cartItem'>
			<img src={image} />
			<p>{name}</p>
			<p>${price}</p>
			<div className="countHandler">
				<button onClick={() => removeFromCart(id)}>-</button>
				<input value={cartItems[id]} />
				<button onClick={() => addToCart(id)}>+</button>
			</div>

		</div>
	)
}


