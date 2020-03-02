import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Item } from './Item';

export const Cart = () => {
	const [ cart, setCart ] = useContext(CartContext);
	const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

	const emptyCart = () => {
		setCart([]);
	};

	return (
		<div className="cart">
			<div className="cartHeader">
				<p>{totalPrice.toFixed(2)}</p>
				<span className="cartCounter"> {cart.length}</span>
			</div>

			<div className="cartDetail">
				{cart.map((item, i) => (
					<p key={i}>
						{item.name} <span>{item.price}</span>
					</p>
				))}
			</div>
			<button className="emptyCart" onClick={() => emptyCart(cart)}>
				remove all
			</button>
			<button className="checkout"> Pay </button>
		</div>
	);
};
