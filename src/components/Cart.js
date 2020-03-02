import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Item } from './Item';

export const Cart = () => {
	const [ cart, setCart ] = useContext(CartContext);
	const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

	return (
		<div>
			<span>cart counter : {cart.length}</span>
			<br />
			<span>total price : {totalPrice}</span>

			<div className="detail">
				{cart.map((item, i) => (
					<h6 key={i}>
						{item.name} - {item.price}
					</h6>
				))}
			</div>
		</div>
	);
};
