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
		const item = { name: props.name, price: props.price, id: props.id, img: props.img };
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
	};

	return (
		<div className="itemInfos" onClick={addToCart}>
			<img src={props.img} alt="" />
			<h2 className="itemName">{props.name}</h2>
			{counter != 0 && <span className="itemCounter"> x{counter}</span>}
			<h4 className="itemPrice">{props.price}</h4>

			{/* <button className="remove" onClick={() => removeToCart(props)}>
				Remove
			</button> */}
		</div>
	);
};
