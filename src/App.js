import React, { Component } from 'react';
import { render } from 'react-dom';
import { ItemList } from './components/ItemList';
import { Cart } from './components/Cart';
import { CartProvider } from './components/CartContext';
import './App.scss';

function App() {
	return (
		<CartProvider>
			<div>
				<Cart />
				<ItemList />
			</div>
		</CartProvider>
	);
}

export default App;
