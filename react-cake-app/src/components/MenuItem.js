import React, { useContext } from 'react';
import {ShopContext} from '../context/shopContext'

function MenuItem(props) {
	const { id, name, image, price } = props.data
	const { addToCart, cartItems } = useContext(ShopContext)

	const cartItemCount = cartItems[id]

	return (
		<div className='menuItem'>
			<div style={{ backgroundImage: `url(${image})` }}> </div>
			<h2>{name}</h2>
			<p>${price}</p>
			<button className="addToCartBttn" onClick={() => addToCart(id)}>
				Add to cart {cartItemCount > 0 && <> ({cartItemCount})</>}
			</button>
		</div>
	)
}

export default MenuItem
