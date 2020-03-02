import React from 'react';
import { Item } from './Item';
import apple from '../images/apple.png';
import coffee from '../images/coffee.png';
import drink from '../images/drink.png';
import lemonade from '../images/lemonade.png';
import sandwich from '../images/sandwich.png';
import water from '../images/water.png';

export const ItemList = () => {
	const database = [
		{ name: 'apple', price: 0.98, img: apple, id: 1 },
		{ name: 'lemonade', price: 2.33, img: lemonade, id: 2 },
		{ name: 'water', price: 0.2, img: water, id: 3 },
		{ name: 'coffee', price: 1, img: coffee, id: 4 },
		{ name: 'drink', price: 2, img: drink, id: 5 },
		{ name: 'sandwich', price: 5, img: sandwich, id: 6 }
	];

	return (
		<div className="itemList">
			{database.map((item, i) => (
				<div key={i} className="item">
					<Item name={item.name} price={item.price} id={item.id} img={item.img} />
				</div>
			))}
		</div>
	);
};
