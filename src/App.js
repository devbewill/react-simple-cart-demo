import React, { Component } from 'react';
import { ItemList } from './components/ItemList';
import { Cart } from './components/Cart';
import { CartProvider } from './components/CartContext';
import apple from './images/apple.png';
import coffee from './images/coffee.png';
import drink from './images/drink.png';
import lemonade from './images/lemonade.png';
import sandwich from './images/sandwich.png';
import water from './images/water.png';

import './App.scss';

const database = [
	{ name: 'apple', price: 0.5, img: apple, id: 1 },
	{ name: 'lemonade', price: 2.5, img: lemonade, id: 2 },
	{ name: 'water', price: 1, img: water, id: 3 },
	{ name: 'coffee', price: 1, img: coffee, id: 4 },
	{ name: 'drink', price: 5, img: drink, id: 5 },
	{ name: 'sandwich', price: 6, img: sandwich, id: 6 }
];

function App() {
	return (
		<CartProvider>
			<div className="container">
				<ItemList db={database} />
				<Cart db={database} />
			</div>
		</CartProvider>
	);
}

export default App;
