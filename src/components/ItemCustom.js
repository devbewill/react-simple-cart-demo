import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from './CartContext';
import newProduct from '../images/newProduct.svg';

export const ItemCustom = (props) => {
	let qty = 0;
	const [ cart, setCart ] = useContext(CartContext);
	const [ counter, setCounter ] = useState(qty);
	const [ customPrice, setCustomPrice ] = useState('0€');
	const [ customName, setCustomName ] = useState('out of menu');

	useEffect(
		() => {
			qty = cart.filter((obj) => obj.id === props.id).length;
			setCounter(qty);
		},
		[ cart ]
	);

	const addToCart = () => {
		const item = { name: customName, price: parseInt(customPrice), id: '', img: newProduct };
		setCart((currentState) => [ ...currentState, item ]);
		setCustomPrice('0€');
		setCustomName('New Item');
	};

	return (
		<div className="item custom">
			<div className="itemInfos">
				<span className="newProduct" onClick={addToCart} />

				<form>
					<div className="group">
						<input
							className="itemName"
							name="name"
							type="text"
							value={customName}
							onFocus={(e) => {
								e.target.value = '';
							}}
							onChange={(e) => {
								setCustomName(e.target.value);
							}}
						/>
						<span className="highlight" />
						<span className="bar" />
						{/* <label>{customName}</label> */}
					</div>

					<div className="group">
						<input
							className="itemPrice"
							name="price"
							type="text"
							value={customPrice}
							onFocus={(e) => {
								e.target.value = '';
							}}
							onChange={(e) => {
								setCustomPrice(e.target.value);
							}}
						/>
						<span className="highlight" />
						<span className="bar" />
						{/* <label>{customPrice}</label> */}
					</div>
				</form>
				{counter != 0 && <span className="itemCounter"> x{counter}</span>}
				{/* <button className="add" onClick={addToCart}>
					Add
				</button> */}
				{/* <button className="remove" onClick={() => removeToCart(props)}>
				Remove
			</button> */}
			</div>
		</div>
	);
};
