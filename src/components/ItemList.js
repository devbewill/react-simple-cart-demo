import React from 'react';
import { Item } from './Item';
import { ItemCustom } from './ItemCustom';

export const ItemList = (props) => {
	const db = props.db;
	return (
		<div className="itemList">
			<ItemCustom />
			{db.map((item, i) => (
				<div key={i} className="item">
					<Item name={item.name} price={item.price} id={item.id} img={item.img} />
				</div>
			))}
		</div>
	);
};
