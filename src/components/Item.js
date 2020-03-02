import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from './CartContext';

export const Item = (props) => {
	let qty = 0;
	const [ cart, setCart ] = useContext(CartContext);
	const [ counter, setCounter ] = useState(qty);

	useEffect(
		() => {
			qty = cart.filter((obj) => obj.id === props.id).length;
			setCounter(qty);
		},
		[ cart ]
	);

	const addToCart = () => {
		const item = { name: props.name, price: props.price, id: props.id };
		setCart((currentState) => [ ...currentState, item ]);
	};

	const removeToCart = (id) => {
		var length = cart.filter((item) => item.id === props.id).length;
		var filtered = [];
		var i = 0;
		cart.map((item) => {
			if (item.id === props.id) {
				i++;
				if (i < length) {
					filtered.push(item);
				}
			} else {
				filtered.push(item);
			}
		});

		setCart(filtered);

		//setCart(cart.filter(item=> item.id !== props.id)) remove all items
	};

	return (
		<div className="itemInfos">
			<h2>
				{props.name} x {counter}
			</h2>
			<h4>{props.price}</h4>
			<button onClick={addToCart}>Add to cart</button>
			<button onClick={() => removeToCart(props)}>Remove</button>
		</div>
	);
};
