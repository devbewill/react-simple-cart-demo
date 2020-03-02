import React from 'react';
import { Item } from './Item';

export const ItemList = (props) => {
	const db = props.db;
	return (
		<div className="itemList">
			{db.map((item, i) => (
				<div key={i} className="item">
					<Item name={item.name} price={item.price} id={item.id} img={item.img} />
				</div>
			))}
		</div>
	);
};
