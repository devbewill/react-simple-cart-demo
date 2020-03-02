import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const Cart = (props) => {
	const [ cart, setCart ] = useContext(CartContext);
	const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

	const removeToCart = (id) => {
		var length = cart.filter((item) => item.id === id).length;
		console.log(length);
		var filtered = [];
		var i = 0;
		cart.map((item) => {
			if (item.id === id) {
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
		<div className="cart">
			<div className="cartHeader">
				<p>{totalPrice.toFixed(2)}</p>
				<span className="cartCounter"> {cart.length}</span>
			</div>

			<div className="cartDetail">
				{cart.map((item, i) => (
					<div key={i} className="cartSingleItem">
						<img src={item.img} alt={item.name} />
						<p>{item.name}</p>
						<p className="price">{item.price}</p>
						<div className="action">
							<FontAwesomeIcon className="remove" icon={faTrash} onClick={() => removeToCart(item.id)} />
						</div>
					</div>
				))}
			</div>
			<button className="emptyCart" onClick={() => setCart([])}>
				remove all
			</button>
			<button className="checkout"> Pay </button>
		</div>
	);
};
