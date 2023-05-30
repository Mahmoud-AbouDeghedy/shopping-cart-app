import React from "react";
import { useSelector } from "react-redux";

import CartItem from "./CartItem";
import "./Cart.css";
const CartItems = () => {
	const cartItems = useSelector((state) => state.cart.itemsList);
	return (
		<div className="cart-container">
			<h2>Your Cart</h2>
			<ul>
				{cartItems.map((item, idx) => (
					<li key={idx}>
						<CartItem
							id={item.id}
							price={item.price}
							name={item.name}
							quantity={item.quantity}
							totalPrice={item.totalPrice}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default CartItems;
