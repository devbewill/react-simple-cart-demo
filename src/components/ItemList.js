import React from 'react';
import { Item } from './Item';

export const ItemList = () => {
	const database = [
		{ name: 'apple', price: 0.98, id: 1 },
		{ name: 'lemon', price: 2.33, id: 2 },
		{ name: 'water', price: 0.2, id: 3 }
	];

	return (
		<div className="itemList">
			{database.map((item, i) => (
				<div key={i} className="item">
					<Item name={item.name} price={item.price} id={item.id} />
				</div>
			))}
		</div>
	);
};
